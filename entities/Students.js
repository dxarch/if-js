import Student from './Student.js';
class Students {
  constructor(studentsData) {
    if (!studentsData.every((item) => typeof item === 'object')){
      throw new Error('Wrong array item type!');
    }

    studentsData.forEach((obj) => {
      if (!('firstName' in obj) || !('lastName' in obj) || !('admissionYear' in obj) || !('courseName' in obj)){
        throw new Error('Wrong object structure!');
      }
    });

    this.students = studentsData
      .map((obj) => new Student(obj))
      .sort((a, b) => a.course - b.course);

    console.log(this.students);
  }

  getInfo() {
    return this.students.map((student) => student.toString());
  }
}

export default Students;
