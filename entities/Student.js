import User from "./User.js";
class Student extends User {
    constructor({admissionYear, courseName, ...props}) {
        super(props);
        this.admissionYear = admissionYear;
        this.courseName = courseName;
    }

    get course() {
        return new Date().getFullYear() - this.admissionYear;
    }

    toString() {
        return `${this.fullName} - ${this.courseName}, ${this.course} курс`;
    }
}

export default Student;