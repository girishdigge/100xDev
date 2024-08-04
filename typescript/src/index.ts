class Account {
  readonly id: number;
  owner?: string;
  private balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }
  withdraw(amount: number): string {
    return this.deduct(amount);
  }
  private deduct(amount: number) {
    console.log(amount);
    if (amount < this.balance) {
      this.balance -= amount;
      return 'your new balance: ' + this.balance;
    }
    return 'unsuccessful';
  }

  deposit(amount: number): string {
    if (amount <= 0) throw new Error('invalid amount');

    this.balance += amount;
    return (
      'your account ' +
      this.id +
      ' +' +
      amount +
      ' deposited. Current balance is : ' +
      this.balance
    );
  }
}

const user = new Account(1, 'girish', 521);
console.log(user.deposit(500));
console.log(user.withdraw(221));
