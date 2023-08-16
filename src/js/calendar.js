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

export const getMonthData = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const dateObjs = [];

  for (let i = currentMonth; i <= currentMonth + 1; i++) {
    const date = new Date(today.getFullYear(), i, 1);
    dateObjs.push(date);
  }

  return dateObjs.map((date) => {
    return {
      monthName: date.toLocaleString('default', { month: 'long' }),
      monthNumber: date.getMonth() + 1,
      year: date.getFullYear(),
      numberOfDays: new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0,
      ).getDate(),
      firstDayIdx:
        new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1,
    };
  });
};

export const createCalendarMonth = (monthData, calendarMonthEls) => {
  let isAfterCurrentDay = false;
  let isCurrentMonthPassed = false;

  calendarMonthEls.forEach((calendarMonthEl, i) => {
    const month = getCalendarMonth(
      monthData[i].numberOfDays,
      7,
      monthData[i].firstDayIdx,
    );
    const calendarGridEl = calendarMonthEl.querySelector(
      '.booking__calendar-grid',
    );

    const monthHeaderEl = document.createElement('h3');
    monthHeaderEl.classList.add('booking__calendar-heading');
    monthHeaderEl.textContent = `${monthData[i].monthName} ${monthData[i].year}`;
    calendarMonthEl.insertBefore(monthHeaderEl, calendarGridEl);

    const daysListEl = document.createElement('ul');
    daysListEl.classList.add('booking__calendar-days');

    month.map((week) => {
      week.map((dayObj) => {
        const calendarDayLiEl = document.createElement('li');
        if (!dayObj.notCurrentMonth) {
          calendarDayLiEl.classList.add(
            'calendar-item',
            'booking__calendar-number',
          );
          calendarDayLiEl.textContent = dayObj.dayOfMonth;

          if (dayObj.currentDay && !isCurrentMonthPassed) {
            calendarDayLiEl.style.color = '#3077c6';
            isAfterCurrentDay = true;
          } else if (!isAfterCurrentDay && !isCurrentMonthPassed) {
            calendarDayLiEl.style.color = '#bfbfbf';
            calendarDayLiEl.classList.add('booking__calendar--disabled');
          }
        }
        daysListEl.appendChild(calendarDayLiEl);
      });
      calendarGridEl.appendChild(daysListEl);
      isCurrentMonthPassed = true;
    });
  });
};

const bookingCalendarMonths = document.querySelectorAll(
  '.booking__calendar-month',
);
const monthData = getMonthData();
createCalendarMonth(monthData, bookingCalendarMonths);

let firstSelectedDate;
let secondSelectedDate;
let firstSelectedDateEl;
let secondSelectedDateEl;
const checkInInput = document.querySelector('#check-in');
const checkOutInput = document.querySelector('#check-out');
export const monthClickEventListener = (e) => {
  let currentMonth, currentYear, currentDay;

  if (e.target.classList.contains('booking__calendar-number')) {
    const monthIdx = Array.from(bookingCalendarMonths).indexOf(e.currentTarget);
    if (monthIdx !== -1) {
      currentMonth = monthData[monthIdx].monthNumber;
      currentYear = monthData[monthIdx].year;
    }

    currentDay = e.target.textContent;

    if (!firstSelectedDate) {
      firstSelectedDate = new Date(
        currentYear,
        currentMonth - 1,
        parseInt(e.target.textContent),
      );
      checkInInput.value = `${currentDay.padStart(2, '0')}.${currentMonth
        .toString()
        .padStart(2, '0')}.${currentYear}`;
      firstSelectedDateEl = e.target;

      e.target.style.backgroundColor = '#3077C6';
      e.target.style.color = '#ffffff';
    } else if (firstSelectedDate && !secondSelectedDate) {
      secondSelectedDate = new Date(
        currentYear,
        currentMonth - 1,
        parseInt(e.target.textContent),
      );
      secondSelectedDateEl = e.target;
      e.target.style.backgroundColor = '#3077C6';
      e.target.style.color = '#ffffff';

      if (secondSelectedDate < firstSelectedDate) {
        firstSelectedDateEl.style.backgroundColor = 'transparent';
        firstSelectedDateEl.style.color = 'inherit';

        firstSelectedDateEl = secondSelectedDateEl;
        firstSelectedDate = secondSelectedDate;
        secondSelectedDateEl = null;
        secondSelectedDate = null;
        checkInInput.value = `${currentDay.padStart(2, '0')}.${currentMonth
          .toString()
          .padStart(2, '0')}.${currentYear}`;
      } else {
        checkOutInput.value = `${currentDay.padStart(2, '0')}.${currentMonth
          .toString()
          .padStart(2, '0')}.${currentYear}`;

        colorDatesBetweenSelected(
          firstSelectedDateEl,
          secondSelectedDateEl,
          '#F3F3F4',
        );
      }
    } else if (firstSelectedDate && secondSelectedDate) {
      colorDatesBetweenSelected(
        firstSelectedDateEl,
        secondSelectedDateEl,
        'inherit',
      );

      firstSelectedDate = null;
      secondSelectedDate = null;

      secondSelectedDateEl.style.backgroundColor = 'inherit';
      secondSelectedDateEl.style.color = 'inherit';
      firstSelectedDateEl.style.backgroundColor = 'inherit';
      firstSelectedDateEl.style.color = 'inherit';

      checkOutInput.value = 'Check-out';

      monthClickEventListener(e);
    }
  }
};

const colorDatesBetweenSelected = (start, end, color) => {
  const months = document.querySelectorAll('.booking__calendar-month');

  let currentEl = start.nextSibling;
  while (currentEl && !(currentEl === end)) {
    if (currentEl.textContent !== '') {
      currentEl.style.backgroundColor = color;
    }
    if (currentEl.nextElementSibling) {
      currentEl = currentEl.nextElementSibling;
    } else {
      currentEl = months[1].querySelector('.booking__calendar-number');
    }
  }
};
