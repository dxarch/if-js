import Student from "./Student.js";
class Students {
    constructor(studentsData) {
        this.students = studentsData
                        .map((obj) => new Student(obj))
                        .sort((a, b) => a.course - b.course);
    }

    getInfo() {
        return this.students.map((student) => student.toString());
    }
}

export default Students;