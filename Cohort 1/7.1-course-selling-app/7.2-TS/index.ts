enum Arithmetic {
  add,
  sub,
  mul,
  div,
}

const Operation = (a: number, b: number, op: Arithmetic) => {
  console.log(op);
};

Operation(1, 2, Arithmetic.sub);
// interface Circle {
//   radius: number;
// }

// interface Square {
//   radius1: string;
// }

// interface Rectangle {
//   width: number;
//   height: number;
// }

// class Shape1 implements Circle, Square {
//   radius: number;
//   radius1: string;
//   constructor(r: number, s: string) {
//     this.radius = r;
//     this.radius1 = s;
//   }
// }
// const sh = new Shape1(10, 'aa');
// type Shape = Rectangle | Circle | Square;
// function renderShape(shape: Shape) {
//   console.log('Rendered');
// }
// function calculateArea(shape: Shape) {
//   console.log('Rendered');
// }
// interface PersonInterface {
//   name: string;
//   age: number;
//   greet(): string;
// }
// class Person implements PersonInterface {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     return 'hi ' + this.name;
//   }
// }
// const person = new Person('girish', 31);
// console.log(person);
// console.log(person.greet());

// interface Person {
//   name: string;
//   age: number;
// }

// export const greet = (person: Person) => {
//   return (
//     'Hello ' + person.name + ' I am glad you are ' + person.age + ' years old.'
//   );
// };
// console.log(greet({ name: 'girish', age: 21 }));

// const calculate = (
//   a: number,
//   b: number,
//   type: 'sum' | 'sub' | 'mul' | 'div'
// ): number => {
//   if (type === 'sum') {
//     return a + b;
//   }
//   if (type === 'sub') {
//     return a - b;
//   }
//   if (type === 'mul') {
//     return a * b;
//   }
//   if (type === 'div') {
//     return a / b;
//   }
//   return -1;
// };
// const sum = calculate(1, 2, 'sum');
// const sum1 = calculate(1, 2, 'sub');
// const sum2 = calculate(1, 2, 'mul');
// const sum3 = calculate(1, 2, 'div');
// console.log(sum, sum1, sum2, sum3);
