import Student from '../entities/Student.js';
import User from '../entities/User.js';

test('Student constructor throws an error if required fields are missing', () => {
  expect(() => new Student({ firstName: 'James', lastName: 'Smith' })).toThrow(
    'Required properties are missing!',
  );
});

test('Student inherits from User class', () => {
  expect(Student.prototype instanceof User).toBe(true);
});

describe('Student: James Smith, 2016, Machine Learning', () => {
  const student = new Student({
    firstName: 'James',
    lastName: 'Smith',
    admissionYear: 2016,
    courseName: 'Machine Learning',
  });

  test('Get course returns 7', () => {
    expect(student.course).toEqual(7);
  });

  test("toString() method returns 'James Smith - Machine Learning, 7 курс'", () => {
    const correctString = 'James Smith - Machine Learning, 7 курс';
    expect(student.toString()).toEqual(correctString);
  });
});
