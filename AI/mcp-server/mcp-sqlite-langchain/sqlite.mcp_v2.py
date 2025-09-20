import asyncio
import os
from dotenv import load_dotenv
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from langchain_mcp_adapters.tools import load_mcp_tools
from langgraph.prebuilt import create_react_agent
from langchain_google_genai import ChatGoogleGenerativeAI

load_dotenv(
    "/home/girish/code/100xDev/AI/mcp-server/mcp-sqlite-langchain/sqlite_mcp_langchain/.env"
)
print("Environment variables loaded from .env file")

# Initialize model and server parameters
model = ChatGoogleGenerativeAI(
    model="gemini-2.0-flash", api_key=os.environ["GOOGLE_API_KEY"]
)
server_params = StdioServerParameters(
    command="uv",
    args=[
        "--directory",
        "/home/girish/code/100xDev/AI/mcp-server/mcp-sqlite-langchain/mcp-servers/servers-archived/src/sqlite",
        "run",
        "mcp-server-sqlite",
        "--db-path",
        "/home/girish/Documents/database.db",
    ],
)


async def process_query(agent, query):
    response = await agent.ainvoke({"messages": query})
    return response["messages"][-1].content


async def main():
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            tools = await load_mcp_tools(session)
            agent = create_react_agent(model, tools)

            print("SQLite Database Assistant (type 'exit' to quit)")

            while True:
                query = input("\nEnter your query: ").strip()
                if query.lower() == "exit":
                    break
                if not query:
                    continue

                print("\nProcessing...\n")
                response = await process_query(agent, query)
                print(f"\nAnswer: {response}")


if __name__ == "__main__":
    asyncio.run(main())
