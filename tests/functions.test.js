import {colors, getCalendarMonth} from '../js/functions.js';

describe('colors', () => {
  it('Returns correct colors for click count within array length', () => {
    const returnedColors = [];
    for (const color of colors) {
      returnedColors.push(color);
      if (returnedColors.length === colors.data.length) {
        break;
      }
    }
    expect(returnedColors).toEqual(colors.data);
  });

  it('Returns correct color for click count outside array length', () => {
    let returnedColor;
    const clicks = colors.data.length + 5;

    for (let i = 0; i < clicks; i++) {
      returnedColor = colors.next('text1').value;
    }

    expect(returnedColor).toBe(colors.data[(clicks - 1) % colors.data.length]);
  });
});

describe('calendar', () => {
  it('Returns correct calendar from valid function arguments', () => {
    const expectedResult = [[
      {dayOfMonth: 7, notCurrentMonth: false, selectedDay: false, currentDay: false},
    {dayOfMonth: 8, notCurrentMonth: true, selectedDay: false, currentDay: false},
    {dayOfMonth: 9, notCurrentMonth: true, selectedDay: false, currentDay: false},
    {dayOfMonth: 10, notCurrentMonth: true, selectedDay: false, currentDay: false},
    {dayOfMonth: 1, notCurrentMonth: false, selectedDay: true, currentDay: false},
    {dayOfMonth: 2, notCurrentMonth: false, selectedDay: false, currentDay: false},
    {dayOfMonth: 3, notCurrentMonth: false, selectedDay: false, currentDay: false},
    ], [
    {dayOfMonth: 4, notCurrentMonth: false, selectedDay: false, currentDay: false},
    {dayOfMonth: 5, notCurrentMonth: false, selectedDay: false, currentDay: false},
    {dayOfMonth: 6, notCurrentMonth: false, selectedDay: true, currentDay: false},
    {dayOfMonth: 7, notCurrentMonth: false, selectedDay: false, currentDay: false},
    {dayOfMonth: 8, notCurrentMonth: false, selectedDay: false, currentDay: false},
    {dayOfMonth: 9, notCurrentMonth: false, selectedDay: false, currentDay: false},
    {dayOfMonth: 10, notCurrentMonth: false, selectedDay: false, currentDay: false},
    ]];

    expect(getCalendarMonth(
            10,
            7,
            4,
            '01/07/2023',
            '06/07/2023',
        ),
    ).toEqual(expectedResult);
  });
});
