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

class Student extends Person {
    constructor(name, surname, age, gender, studentID, grades = []) {
        super(name, surname, age, gender);
        this.studentID = studentID;
        this.grades = grades;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    calculateGPA() {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    toString() {
        return `${super.toString()} I am a student with ID ${this.studentID}.`;
    }
}

class Teacher extends Person {
    constructor(name, surname, age, gender, subject, yearsOfExperience, salary) {
        super(name, surname, age, gender);
        this.subject = subject;
        this.yearsOfExperience = yearsOfExperience;
        this.salary = salary;
    }

    giveRaise(percentage) {
        this.salary += this.salary * (percentage / 100);
    }

    toString() {
        return `${super.toString()} I teach ${this.subject}.`;
    }
}