class School {
    constructor() {
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
    }

    printStudents() {
        console.log("Students:");
        this.members
            .filter(member => member instanceof Student)
            .forEach(student => console.log(student.toString()));
    }

    printTeachers() {
        console.log("Teachers:");
        this.members
            .filter(member => member instanceof Teacher)
            .forEach(teacher => console.log(teacher.toString()));
    }
}