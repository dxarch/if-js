export const addChildrenDetails = (guestsFilter) => {
  const detailsDescription = document.createElement('p');
  detailsDescription.textContent =
    'What is the age of the child you’re travelling with?';
  detailsDescription.classList.add('booking__filter-child-question');
  guestsFilter.appendChild(detailsDescription);
};

export const addChildAge = (guestsFilter, minAge, maxAge) => {
  const agesContainer = document.createElement('select');
  agesContainer.classList.add('booking__filter-child-ages');
  guestsFilter.appendChild(agesContainer);

  for (let age = minAge; age <= maxAge; age++) {
    const option = document.createElement('option');
    option.textContent = `${age} years old`;
    agesContainer.appendChild(option);
  }
};

export const removeChildAge = (guestsFilter, value) => {
  guestsFilter.removeChild(guestsFilter.lastChild);
  value === 0 ? guestsFilter.removeChild(guestsFilter.lastChild) : guestsFilter;
};

export const incrementFilterValue = (
  decrementBtn,
  incrementBtn,
  value,
  min,
  max,
) => {
  value++;

  if (value < max && value > min) {
    incrementBtn.classList.add('booking__filter-btn--active');
    decrementBtn.classList.add('booking__filter-btn--active');
    return value;
  }

  incrementBtn.classList.remove('booking__filter-btn--active');

  return max;
};

export const decrementFilterValue = (
  decrementBtn,
  incrementBtn,
  value,
  min,
  max,
) => {
  value--;

  if (value > min && value < max) {
    incrementBtn.classList.add('booking__filter-btn--active');
    decrementBtn.classList.add('booking__filter-btn--active');
    return value;
  }

  decrementBtn.classList.remove('booking__filter-btn--active');
  incrementBtn.classList.add('booking__filter-btn--active');

  return min;
};
