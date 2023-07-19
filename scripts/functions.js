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

const findDataByQuery = (arr, query) => {
  return arr
    .filter((obj) =>
      Object.values(obj)
        .map((v) => v.toLowerCase())
        .includes(query.toLowerCase()),
    )
    .map((obj) => Object.values(obj).reverse())
    .reduce((accum, currItem) => accum.concat(currItem), []);
};

const countryCity = (arr) => {
  const result = {};

  arr.forEach((obj) => {
    const { country, city } = obj;
    if (country === undefined || city === undefined) {
      throw new Error('Wrong object structure!');
    }

    if (result[country] === undefined) {
      result[country] = [];
    }
    if (!result[country].includes(city)) {
      result[country].push(city);
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
