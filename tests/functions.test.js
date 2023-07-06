import { deepEqual, getCalendarMonth } from '../scripts/functions';

test('Get calendar month without arguments returns default calendar', () => {

  const output = [
    [
      { dayOfMonth: 27, notCurrentMonth: true, selectedDay: false },
      { dayOfMonth: 28, notCurrentMonth: true, selectedDay: false },
      { dayOfMonth: 29, notCurrentMonth: true, selectedDay: false },
      { dayOfMonth: 30, notCurrentMonth: true, selectedDay: false },
      { dayOfMonth: 1, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 2, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 3, notCurrentMonth: false, selectedDay: false },
    ],
    [
      { dayOfMonth: 4, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 5, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 6, notCurrentMonth: false, selectedDay: true },
      { dayOfMonth: 7, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 8, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 9, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 10, notCurrentMonth: false, selectedDay: false },
    ],
    [
      { dayOfMonth: 11, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 12, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 13, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 14, notCurrentMonth: false, selectedDay: true },
      { dayOfMonth: 15, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 16, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 17, notCurrentMonth: false, selectedDay: false },
    ],
    [
      { dayOfMonth: 18, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 19, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 20, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 21, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 22, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 23, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 24, notCurrentMonth: false, selectedDay: false },
    ],
    [
      { dayOfMonth: 25, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 26, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 27, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 28, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 29, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 30, notCurrentMonth: false, selectedDay: false },
      { dayOfMonth: 1, notCurrentMonth: true, selectedDay: false },
    ],
  ];

  expect(getCalendarMonth()).toEqual(output);
});

test('Objects are equal', () => {
  const a = {
    a: 'a',
    b: {
      a: 'a',
      b: 'b',
      c: {
        a: 1,
      },
    },
  };

  const b = {
    b: {
      c: {
        a: 1,
      },
      b: 'b',
      a: 'a',
    },
    a: 'a',
  };

  expect(deepEqual(a, b)).toBe(true);
});

test('Objects are not equal', () => {
  const a = {
    a: 'a',
    b: {
      a: 'a',
      b: 'b',
      c: {
        a: 1,
      },
    },
  };

  const b = {
    a: {
      c: {
        a: 'a',
      },
      b: 'b',
      a: 'a',
    },
    b: 'b',
  };

  expect(deepEqual(a, b)).toBe(false);
});

