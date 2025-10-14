
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.bio = function () {
        console.log(`I'm ${this.name} and i'm ${this.age} years old!`)
    }
}

const slava = new Person('Slava', 20);
slava.bio();