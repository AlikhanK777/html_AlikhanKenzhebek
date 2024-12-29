class Person {
    constructor(name, surname, age, gender) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
    }

    toString() {
        return `Hi, I am ${this.name} ${this.surname}, a ${this.age}-year-old ${this.gender ? 'Male' : 'Female'}.`;
    }
}

const harry = new Person('Harry', 'Potter', 21, true);
const ron = new Person('Ron', 'Weasley', 20, true);
const hermione = new Person('Hermione', 'Granger', 19, false);
const luna = new Person('Luna', 'Lovegood', 20, false);
const draco = new Person('Draco', 'Malfoy', 19, true);

console.log(harry.toString());
console.log(ron.toString());
console.log(hermione.toString());
console.log(luna.toString());
console.log(draco.toString());