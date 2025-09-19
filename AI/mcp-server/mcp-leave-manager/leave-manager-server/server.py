import difflib
import os
from datetime import datetime
from typing import List, Optional
from dataclasses import dataclass
from contextlib import contextmanager
import psycopg2
from dotenv import load_dotenv
from mcp.server.fastmcp import FastMCP

load_dotenv()
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = int(os.getenv("DB_PORT", 5432))
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")

mcp = FastMCP("Leave Manager")


@dataclass
class Employee:
    employee_id: str
    name: str
    department: str
    manager: str
    annual_leave_balance: int
    sick_leave_balance: int


@dataclass
class LeaveRequest:
    request_id: str
    employee_id: str
    employee_name: str
    start_date: str
    end_date: str
    leave_type: str
    status: str
    reason: str
    days_requested: int
    submitted_date: str
    approved_by: Optional[str] = None


# Context manager for PostgreSQL connection
@contextmanager
def get_db_connection():
    conn = psycopg2.connect(
        host=DB_HOST, port=DB_PORT, dbname=DB_NAME, user=DB_USER, password=DB_PASSWORD
    )
    try:
        yield conn
    finally:
        conn.close()


def init_database():
    """Initialize PostgreSQL tables and insert sample data if empty"""
    with get_db_connection() as conn:
        with conn.cursor() as cursor:
            # Create tables
            cursor.execute(
                """
                CREATE TABLE IF NOT EXISTS employees (
                    employee_id TEXT PRIMARY KEY,
                    name TEXT NOT NULL,
                    department TEXT NOT NULL,
                    manager TEXT NOT NULL,
                    annual_leave_balance INTEGER NOT NULL,
                    sick_leave_balance INTEGER NOT NULL
                )
            """
            )
            cursor.execute(
                """
                CREATE TABLE IF NOT EXISTS leave_requests (
                    request_id TEXT PRIMARY KEY,
                    employee_id TEXT NOT NULL,
                    employee_name TEXT NOT NULL,
                    start_date DATE NOT NULL,
                    end_date DATE NOT NULL,
                    leave_type TEXT NOT NULL,
                    status TEXT NOT NULL,
                    reason TEXT NOT NULL,
                    days_requested INTEGER NOT NULL,
                    submitted_date DATE NOT NULL,
                    approved_by TEXT,
                    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
                )
            """
            )

            # Insert sample employees if table is empty
            cursor.execute("SELECT COUNT(*) FROM employees")
            if cursor.fetchone()[0] == 0:
                sample_employees = [
                    ("EMP001", "John Smith", "Engineering", "Jane Doe", 25, 10),
                    ("EMP002", "Alice Johnson", "Marketing", "Bob Wilson", 20, 10),
                    ("EMP003", "Bob Wilson", "Marketing", "Jane Doe", 25, 10),
                    ("EMP004", "Sarah Davis", "HR", "Jane Doe", 22, 11),
                    ("EMP005", "Nick Chen", "Engineering", "John Smith", 18, 10),
                ]
                cursor.executemany(
                    """
                    INSERT INTO employees (employee_id, name, department, manager, annual_leave_balance, sick_leave_balance)
                    VALUES (%s, %s, %s, %s, %s, %s)
                """,
                    sample_employees,
                )

                # Sample leave requests
                sample_requests = [
                    (
                        "REQ001",
                        "EMP001",
                        "John Smith",
                        "2024-07-01",
                        "2024-07-05",
                        "annual",
                        "approved",
                        "Family vacation",
                        5,
                        "2024-06-15",
                        "Jane Doe",
                    ),
                    (
                        "REQ002",
                        "EMP002",
                        "Alice Johnson",
                        "2024-07-10",
                        "2024-07-12",
                        "sick",
                        "approved",
                        "Doctor appointment",
                        3,
                        "2024-07-09",
                        "Bob Wilson",
                    ),
                    (
                        "REQ003",
                        "EMP003",
                        "Bob Wilson",
                        "2024-08-01",
                        "2024-08-03",
                        "annual",
                        "pending",
                        "Trip vacation",
                        3,
                        "2024-07-20",
                        None,
                    ),
                    (
                        "REQ004",
                        "EMP004",
                        "Sarah Davis",
                        "2024-07-15",
                        "2024-07-16",
                        "personal",
                        "denied",
                        "Personal matters",
                        2,
                        "2024-07-10",
                        "Jane Doe",
                    ),
                ]
                cursor.executemany(
                    """
                    INSERT INTO leave_requests (
                        request_id, employee_id, employee_name, start_date, end_date,
                        leave_type, status, reason, days_requested, submitted_date, approved_by
                    )
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """,
                    sample_requests,
                )
        conn.commit()


# --- Database load functions ---
def load_employees() -> List[Employee]:
    with get_db_connection() as conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM employees")
            rows = cursor.fetchall()
            return [Employee(*row) for row in rows]


def load_leave_requests() -> List[LeaveRequest]:
    with get_db_connection() as conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM leave_requests")
            rows = cursor.fetchall()
            return [LeaveRequest(*row) for row in rows]


def get_employee_by_id(employee_id: str) -> Optional[Employee]:
    with get_db_connection() as conn:
        with conn.cursor() as cursor:
            cursor.execute(
                "SELECT * FROM employees WHERE employee_id = %s", (employee_id,)
            )
            row = cursor.fetchone()
            return Employee(*row) if row else None


def get_employee_by_name(name: str) -> Optional[Employee]:
    with get_db_connection() as conn:
        with conn.cursor() as cursor:
            cursor.execute(
                "SELECT * FROM employees WHERE LOWER(name) = LOWER(%s)", (name,)
            )
            row = cursor.fetchone()
            return Employee(*row) if row else None


def find_similar_employees(name: str, threshold: float = 0.6) -> List[Employee]:
    employees = load_employees()
    similar_employees = []
    for emp in employees:
        similarity = difflib.SequenceMatcher(
            None, name.lower(), emp.name.lower()
        ).ratio()
        if similarity >= threshold:
            similar_employees.append((emp, similarity))
    similar_employees.sort(key=lambda x: x[1], reverse=True)
    return [emp for emp, _ in similar_employees]


# --- MCP Resources & Tools ---
@mcp.resource("employees://all")
def get_all_employees() -> str:
    employees = load_employees()
    result = "Employee Directory:\n\n"
    for emp in employees:
        result += f"ID: {emp.employee_id}\nName: {emp.name}\nDepartment: {emp.department}\nManager: {emp.manager}\nAnnual Leave: {emp.annual_leave_balance}\nSick Leave: {emp.sick_leave_balance}\n{'_'*40}\n"
    return result


@mcp.resource("employee://{employee_id}")
def get_employee_info(employee_id: str) -> str:
    emp = get_employee_by_id(employee_id)
    if not emp:
        return f"Employee {employee_id} not found"
    return f"ID: {emp.employee_id}\nName: {emp.name}\nDepartment: {emp.department}\nManager: {emp.manager}\nAnnual Leave: {emp.annual_leave_balance}\nSick Leave: {emp.sick_leave_balance}"


# --- Leave request tools ---
@mcp.tool()
def add_employee(
    name: str,
    department: str,
    manager: str,
    annual_leave_balance: int = 10,
    sick_leave_balance: int = 5,
) -> str:
    """Add a new employee with given leave balances."""
    with get_db_connection() as conn:
        with conn.cursor() as cursor:
            # Generate new employee ID
            cursor.execute(
                "SELECT employee_id FROM employees WHERE employee_id LIKE 'EMP%' ORDER BY employee_id DESC LIMIT 1"
            )
            last_id = cursor.fetchone()
            next_num = int(last_id[0][3:]) + 1 if last_id else 1
            employee_id = f"EMP{next_num:03d}"

            # Insert the new employee
            cursor.execute(
                """
                INSERT INTO employees (employee_id, name, department, manager, annual_leave_balance, sick_leave_balance)
                VALUES (%s, %s, %s, %s, %s, %s)
                """,
                (
                    employee_id,
                    name,
                    department,
                    manager,
                    annual_leave_balance,
                    sick_leave_balance,
                ),
            )
        conn.commit()
    return f"Employee {name} added with ID {employee_id}"


@mcp.tool()
def submit_leave_request(
    employee_id: str,
    start_date: str,
    end_date: str,
    leave_type: str,
    reason: str,
    days_requested: int,
) -> str:
    """Submit leave requests"""
    employee = get_employee_by_id(employee_id)
    if not employee:
        return f"Error: Employee {employee_id} not found"

    valid_types = ["annual", "sick", "personal", "emergency"]
    if leave_type.lower() not in valid_types:
        return f"Error: Invalid leave type. Must be one of: {', '.join(valid_types)}"

    with get_db_connection() as conn:
        with conn.cursor() as cursor:
            cursor.execute(
                "SELECT request_id FROM leave_requests WHERE request_id LIKE 'REQ%' ORDER BY request_id DESC LIMIT 1"
            )
            last_id = cursor.fetchone()
            next_num = int(last_id[0][3:]) + 1 if last_id else 1
            request_id = f"REQ{next_num:03d}"

            cursor.execute(
                """
                INSERT INTO leave_requests (
                    request_id, employee_id, employee_name, start_date, end_date,
                    leave_type, status, reason, days_requested, submitted_date, approved_by
                ) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
            """,
                (
                    request_id,
                    employee_id,
                    employee.name,
                    start_date,
                    end_date,
                    leave_type.lower(),
                    "pending",
                    reason,
                    days_requested,
                    datetime.now().strftime("%Y-%m-%d"),
                    None,
                ),
            )
        conn.commit()

    return f"Leave request ({request_id}) submitted successfully for {employee.name}"


# --- Initialize and run ---
if __name__ == "__main__":
    init_database()
    mcp.run()
