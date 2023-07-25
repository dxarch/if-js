import Students from '../entities/Students.js';
import Student from '../entities/Student.js';

it('Throws an Error when wrong array is passed', () => {
  expect(() => new Students([1, 2, 3])).toThrow('Wrong array item type!');
});

it('Throws an Error when objects in array are wrong', () => {
  const arr = [
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      courseName: 'JavaScript',
    },
    {
      a: 1,
      b: 2,
    },
  ];

  expect(() => new Students(arr)).toThrow('Wrong object structure!');
});

it('Has an array of Student entities', () => {
  const arr = [
    {
      firstName: 'Василий',
      lastName: 'Петров',
      admissionYear: 2019,
      courseName: 'Java',
    },
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      admissionYear: 2018,
      courseName: 'JavaScript',
    },
  ];

  const students = new Students(arr);
  expect(
    students.students.every((item) => item instanceof Student),
  ).toBeTruthy();
});

it('Sorts students by course ASC', () => {
  const arr = [
    {
      firstName: 'Василий',
      lastName: 'Петров',
      admissionYear: 2018,
      courseName: 'Java',
    },
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      admissionYear: 2022,
      courseName: 'JavaScript',
    },
  ];

  const students = new Students(arr);

  const expectedArr = [new Student(arr[1]), new Student(arr[0])];

  expect(students.students).toStrictEqual(expectedArr);
});
