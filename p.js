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