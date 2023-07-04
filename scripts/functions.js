import { hotels } from './array.js';


const deepEqual = (objA, objB) => {
  const akeys = Object.keys(objA).sort((a, b) => a > b ? 1 : -1);
  const bkeys = Object.keys(objB).sort((a, b) => a > b ? 1 : -1);

  if (akeys.length !== bkeys.length) {
    return false;
  }

  akeys.forEach((key) => {
    const aval = objA[key];
    const bval = objB[key];

    const areObjects = typeof aval === 'object' && typeof bval === 'object';

    if (!areObjects && aval !== bval || areObjects && !deepEqual(aval, bval)) {
      return false;
    }
  });

  return true;
};


const getCalendarMonth = (
  daysInMonth = 30,
  daysInWeek = 7,
  firstDayInMonthIdx = 4,
) => {
  if (firstDayInMonthIdx > daysInWeek) {
    throw new Error('Wrong first day index!');
  }

  const weeks = Math.round(daysInMonth / daysInWeek) + 1;
  const calendar = Array(weeks)
    .fill()
    .map(() => Array(daysInWeek).fill(0));

  calendar.forEach((week, weekIdx) => {
    week.forEach((day, dayIdx) => {
      if (weekIdx > 0) {
        week[dayIdx] =
          (calendar[weekIdx - 1][dayIdx] + daysInWeek) % daysInMonth ||
          daysInMonth;
      } else {
        week[dayIdx] =
          (daysInMonth - firstDayInMonthIdx + dayIdx + 1) % daysInMonth ||
          daysInMonth;
      }
    });
  });

  return calendar;
};

export { getCalendarMonth, deepEqual };
