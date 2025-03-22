class Person {
  constructor(public fName: string, public lName: string) {}

  get fullName() {
    return this.fName + ' ' + this.lName;
  }
  walk() {
    console.log('walking....');
  }
}
class Student extends Person {
  constructor(public id: number, fName: string, lName: string) {
    super(fName, lName);
  }
}

class Teacher extends Person {
  override get fullName() {
    return 'professor. ' + super.fullName;
  }
}

const printNames = (people: Person[]) => {
  people.forEach((person) => {
    console.log(person.fullName);
  });
};
printNames([
  new Student(12, 'Girish', 'Digge'),
  new Teacher('Shane', 'McGill'),
]);
// const teacher = new Teacher('Girish', 'Digge');
// console.log(teacher.fullName);
// const student = new Student(21, 'Girish', 'Digge');
// console.log(student);

// class Ride {
//   private static _activeRides = 0;

//   start() {
//     Ride._activeRides++;
//   }
//   stop() {
//     Ride._activeRides--;
//   }
//   get activeRides(): number {
//     return Ride._activeRides;
//   }
// }

// const ride1 = new Ride();
// ride1.start();
// ride1.start();
// const ride2 = new Ride();
// ride2.start();
// ride2.start();
// ride2.stop();
// console.log(ride2.activeRides);
// class Account {
//   nickname?: string;

//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private balance: number
//   ) {}
//   withdraw(amount: number): string {
//     return this.deduct(amount);
//   }
//   private deduct(amount: number) {
//     console.log(amount);
//     if (amount < this.balance) {
//       this.balance -= amount;
//       return 'your new balance: ' + this.balance;
//     }
//     return 'unsuccessful';
//   }

//   deposit(amount: number): string {
//     if (amount <= 0) throw new Error('invalid amount');

//     this.balance += amount;
//     return (
//       'your account ' +
//       this.id +
//       ' +' +
//       amount +
//       ' deposited. Current balance is : ' +
//       this.balance
//     );
//   }
//   get AccBalance(): number {
//     return this.balance;
//   }
//   set AccBalance(value: number) {
//     this.balance += value;
//   }
// }

// const user = new Account(1, 'girish', 521);
// console.log(user.deposit(500));
// console.log(user.withdraw(221));

// const user = new Account(1, 'Girish', 1023);
// console.log((user.AccBalance = 1111));

// class SeatAssignment {
//   [seatNumber: string]: string;
// }
// const seats = new SeatAssignment();
// seats.A1 = 'Kiara Advani';
// seats['A2'] = 'Girish Digge';
// seats.A3 = 'Blake Lively';

// console.log(seats);
