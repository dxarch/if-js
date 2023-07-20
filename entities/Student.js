import User from './User.js';
class Student extends User {
  constructor({ admissionYear, courseName, ...props }) {
    if (!('firstName' in props) || !('lastName' in props) || admissionYear === undefined || courseName === undefined) {
      throw new Error('Required properties are missing!');
    }
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
