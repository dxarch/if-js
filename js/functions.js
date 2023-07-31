const changeStyle = (id) => (event) => {
  event.target.style.color = colors.next(id).value;
};

const text1Count = Symbol.for('text1');
const text2Count = Symbol.for('text2');
const text3Count = Symbol.for('text3');
const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [text1Count]: 0,
  [text2Count]: 0,
  [text3Count]: 0,

  [Symbol.iterator]() {
    return this;
  },

  next(id = 'text1') {
    const clickCount = Symbol.for(id);
    this[clickCount]++;
    return {
      done: false,
      value: this.data[(this[clickCount] - 1) % this.data.length],
    };
  },
};

const getCalendarMonth = (
  daysInMonth = 30,
  daysInWeek = 7,
  firstDayInMonthIdx = 4,
  checkInDate = '06/11/1973',
  checkOutDate = '14/11/1973',
) => {
  if (firstDayInMonthIdx > daysInWeek) {
    throw new Error('Wrong first day index!');
  }

  const weeks = Math.round(daysInMonth / daysInWeek) + 1;
  const calendar = [];
  const dayToday = new Date().getDate();

  for (let w = 0; w < weeks; w++) {
    const week = [];

    for (let d = 0; d < daysInWeek; d++) {
      let day = 0;
      const dayObj = {
        dayOfMonth: 0,
        notCurrentMonth: false,
        selectedDay: false,
        currentDay: false,
      };

      if (w > 0) {
        day = calendar[w - 1][d].dayOfMonth + daysInWeek;
      } else {
        day = daysInMonth - firstDayInMonthIdx + d + 1;
      }

      if (day > daysInMonth) {
        day = day % daysInMonth || daysInMonth;
      }

      if (day > daysInWeek * (w + 1) || day < w * d) {
        dayObj.notCurrentMonth = true;
      }

      dayObj.dayOfMonth = day;

      if (day === dayToday) {
        dayObj.currentDay = true;
      }

      if (
        day === Number(checkInDate.split('/')[0]) ||
        day === Number(checkOutDate.split('/')[0])
      ) {
        dayObj.selectedDay = true;
      }

      week.push(dayObj);
    }
    calendar.push(week);
  }

  return calendar;
};

export { changeStyle, colors, getCalendarMonth };
