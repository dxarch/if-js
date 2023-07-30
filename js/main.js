import { changeStyle, getCalendarMonth } from './functions.js';

document.addEventListener('click', (e) => {
  changeStyle(e.target.id)(e);
});

const today = new Date();
const daysInCurrentMonth = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  0,
).getDate();
const firstDayInMonthIdx =
  new Date(today.getFullYear(), today.getMonth(), 1).getDay() - 1;
console.log(
  getCalendarMonth(
    daysInCurrentMonth,
    7,
    firstDayInMonthIdx,
    '06/07/2023',
    '12/07/2023',
  ),
);

console.log(getCalendarMonth(10, 7, 4, '01/07/2023', '06/07/2023'));
