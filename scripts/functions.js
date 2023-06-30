import { hotels } from './array.js';

const isPalindrome = (word) => {
  const cleanWord = word.replaceAll(/[.,#!?$%&';:\-_()\s]/g, '').toLowerCase();
  return (
    cleanWord.slice(0, cleanWord.length / 2) ===
    cleanWord
      .slice(-cleanWord.length / 2)
      .split('')
      .reverse()
      .join('')
  );
};

const findDataByQuery = (query) => {
  return hotels
    .filter((obj) =>
      Object.values(obj)
        .map((v) => v.toLowerCase())
        .includes(query.toLowerCase()),
    )
    .map((obj) => Object.values(obj).reverse())
    .reduce((accum, currItem) => accum.concat(currItem), []);
};

const countryCity = () => {
  const result = {};

  hotels.forEach((obj) => {
    if (result[obj.country] === undefined) {
      result[obj.country] = [];
      if (!result[obj.country].includes(obj.city)) {
        result[obj.country].push(obj.city);
      }
    }
  });

  return result;
};

const getCalendarMonth = (daysInMonth = 30, daysInWeek = 7, firstDayInMonthIdx = 4) => {
  if (firstDayInMonthIdx > daysInWeek) {
    throw new Error("Wrong first day index!");
  }

  const weeks = Math.round(daysInMonth / daysInWeek) + 1;
  const calendar = Array(weeks).fill().map(() => Array(daysInWeek).fill(0));

  calendar.forEach((week, weekIdx) => {
    week.forEach((day, dayIdx) => {
      if (weekIdx > 0){
        week[dayIdx] = (calendar[weekIdx - 1][dayIdx] + daysInWeek) % daysInMonth || daysInMonth;
      } else {
        week[dayIdx] = (daysInMonth - firstDayInMonthIdx + dayIdx + 1) % daysInMonth || daysInMonth;
      }
    });
  });

  return calendar;
};

export { isPalindrome, findDataByQuery, countryCity, getCalendarMonth };
