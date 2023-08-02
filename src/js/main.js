import { data } from './array.js';
import {
  createNewHomesItem,
  incrementFilterValue,
  decrementFilterValue,
  addChildrenDetails,
  addChildAge,
  removeChildAge,
} from './functions.js';

const homesContainer = document.querySelector('.homes__slides');
data.map((obj) => {
  const home = createNewHomesItem(obj);
  homesContainer.appendChild(home);
});

const booking = document.querySelector('.booking');
const bookingGuests = document.querySelector('.booking__guests');
const guestsFilter = document.querySelector('.booking__guests-filter');
const bookingWrapper = document.querySelectorAll('.booking__wrap');
const bookingControls = document.querySelectorAll('.booking__filter-controls');
booking.addEventListener('click', (e) => {
  if (
    !e.target.classList.contains('booking__wrap') ||
    !e.target.classList.contains('booking__input')
  ) {
    bookingWrapper.forEach((item) => item.classList.remove('focused'));
    guestsFilter.classList.add('--hidden');
  }
});

bookingWrapper.forEach((wrapper) => {
  wrapper.addEventListener('click', (e) => {
    e.currentTarget.classList.add('focused');
    bookingWrapper.forEach((other) => {
      if (other !== wrapper) {
        other.classList.remove('focused');
        guestsFilter.classList.add('--hidden');
      }
    });

    if (e.currentTarget.classList.contains('booking__guests')) {
      guestsFilter.classList.remove('--hidden');
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
        removeChildAge(guestsFilter, value);
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
