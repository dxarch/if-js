import {
  incrementFilterValue,
  decrementFilterValue,
  addChildrenDetails,
  addChildAge,
  removeChildAge,
} from './guests-filter.js';
import { monthClickEventListener } from './calendar.js';
import { fetchAndShowHomes } from './homes.js';
import { findHotels } from './hotel-search.js';

fetchAndShowHomes('https://if-student-api.onrender.com/api/hotels/popular');

const booking = document.querySelector('.booking');
const bookingGuests = document.querySelector('.booking__guests');
const guestsFilter = document.querySelector('.booking__guests-filter');
const bookingCalendar = document.querySelector('.booking__calendar');
const bookingCalendarMonths = document.querySelectorAll(
  '.booking__calendar-month',
);
const bookingWrapper = document.querySelectorAll('.booking__wrap');
const bookingControls = document.querySelectorAll('.booking__filter-controls');
const searchBtn = booking.querySelector('.booking__button');
const cityInput = booking.querySelector('#city');
const offerSectionEl = document.querySelector('.offer');

searchBtn.addEventListener('click', async (e) => {
  console.log('Search btn click');
  e.preventDefault();

  const inputVal = cityInput.value;
  if (inputVal.length > 0) {
    await findHotels(
      'https://if-student-api.onrender.com/api/hotels',
      inputVal.toLowerCase(),
    )
      .then((hotelsSectionEl) =>
        offerSectionEl.insertAdjacentElement('beforebegin', hotelsSectionEl),
      )
      .catch((error) => console.log(error));
  }

  const availableHotelsEl = document.querySelector('.hotels');
  if (availableHotelsEl) {
    availableHotelsEl.scrollIntoView({ behavior: 'smooth' });
  }
});

booking.addEventListener('click', (e) => {
  console.log('Booking click');
  if (
    !e.target.classList.contains('booking__wrap') ||
    !e.target.classList.contains('booking__input')
  ) {
    bookingWrapper.forEach((item) => item.classList.remove('focused'));
    guestsFilter.classList.add('--hidden');
    bookingCalendar.classList.add('--hidden');
  }
});

bookingCalendarMonths.forEach((month) => {
  month.addEventListener('click', (e) => monthClickEventListener(e));
});

bookingWrapper.forEach((wrapper) => {
  wrapper.addEventListener('click', (e) => {
    e.currentTarget.classList.add('focused');
    bookingWrapper.forEach((other) => {
      if (other !== wrapper) {
        other.classList.remove('focused');
        guestsFilter.classList.add('--hidden');
        bookingCalendar.classList.add('--hidden');
      }
    });

    if (e.currentTarget.classList.contains('booking__guests')) {
      guestsFilter.classList.remove('--hidden');
    } else if (e.currentTarget.classList.contains('booking__dates')) {
      bookingCalendar.classList.remove('--hidden');
    }
    e.stopPropagation();
  });
});

bookingControls.forEach((group) => {
  const incrementBtn = group.querySelector('.booking__filter-btn--increment');
  const decrementBtn = group.querySelector('.booking__filter-btn--decrement');
  const valueEl = group.querySelector('.booking__filter-value');
  const valueId = valueEl.id;
  const adultsInput = bookingGuests.querySelector('#adults');
  const childrenInput = bookingGuests.querySelector('#children');
  const roomsInput = bookingGuests.querySelector('#rooms');

  incrementBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let value = parseInt(valueEl.textContent);
    switch (valueId) {
      case 'adults-value':
        value = incrementFilterValue(decrementBtn, incrementBtn, value, 1, 30);
        adultsInput.value = value.toString();
        adultsInput.style.width = adultsInput.value.length + 'ch';
        break;
      case 'children-value':
        value = incrementFilterValue(decrementBtn, incrementBtn, value, 0, 10);
        value === 1 ? addChildrenDetails(guestsFilter) : value;
        addChildAge(guestsFilter, 0, 17);
        childrenInput.value = value.toString();
        childrenInput.style.width = childrenInput.value.length + 'ch';
        break;
      case 'rooms-value':
        value = incrementFilterValue(decrementBtn, incrementBtn, value, 1, 30);
        roomsInput.value = value.toString();
        roomsInput.style.width = roomsInput.value.length + 'ch';
        break;
    }
    valueEl.textContent = value.toString();
  });

  decrementBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let value = parseInt(valueEl.textContent);
    switch (valueId) {
      case 'adults-value':
        value = decrementFilterValue(decrementBtn, incrementBtn, value, 1, 30);
        adultsInput.value = value.toString();
        adultsInput.style.width = adultsInput.value.length + 'ch';
        break;
      case 'children-value':
        value = decrementFilterValue(decrementBtn, incrementBtn, value, 0, 10);
        childrenInput.value = value.toString();
        childrenInput.style.width = childrenInput.value.length + 'ch';

        const hasAgeSelectors =
          guestsFilter.querySelectorAll('.booking__filter-child-ages').length >
          0;
        if (hasAgeSelectors) {
          removeChildAge(guestsFilter, value);
        }
        break;
      case 'rooms-value':
        value = decrementFilterValue(decrementBtn, incrementBtn, value, 1, 30);
        roomsInput.value = value.toString();
        roomsInput.style.width = roomsInput.value.length + 'ch';
        break;
    }
    valueEl.textContent = value.toString();
  });
});
