import Students from "../entities/Students.js";
import studentsData from "./students.js";

const studentList = new Students(studentsData);
console.log(studentList.getInfo());