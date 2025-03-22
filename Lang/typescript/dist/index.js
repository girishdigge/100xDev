"use strict";
class Person {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    get fullName() {
        return this.fName + ' ' + this.lName;
    }
    walk() {
        console.log('walking....');
    }
}
class Student extends Person {
    constructor(id, fName, lName) {
        super(fName, lName);
        this.id = id;
    }
}
class Teacher extends Person {
    get fullName() {
        return 'professor. ' + super.fullName;
    }
}
const printNames = (people) => {
    people.forEach((person) => {
        console.log(person.fullName);
    });
};
printNames([
    new Student(12, 'Girish', 'Digge'),
    new Teacher('Shane', 'McGill'),
]);
