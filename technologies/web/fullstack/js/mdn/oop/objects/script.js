const person = {
    name: {
        first: 'Bob',
        last: 'Smith'
    },
    age: 32,
    bio() {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name.first}.`);
    }
};

const myDataName = 'height';
const myDataValue = '1.8m';

person[myDataName] = myDataValue;

console.log(person);
person.bio();
console.log(person.height);