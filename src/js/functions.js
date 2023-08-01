export const createNewHomesItem = (obj) => {
  const { name, city, country, imageUrl } = obj;

  const homeWrapper = document.createElement('figure');
  homeWrapper.classList.add(
    'flex',
    'flex__col',
    'slides__item',
    'col-lg-3',
    'col-sm-3',
  );

  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = name;
  img.classList.add('slides__image');

  const hotel = document.createElement('figcaption');
  hotel.textContent = name;
  hotel.classList.add('slides__caption', 'slides__caption--primary');

  const location = document.createElement('p');
  location.textContent = `${city}, ${country}`;
  location.classList.add('slides__caption', 'slides__caption--secondary');

  homeWrapper.appendChild(img);
  homeWrapper.appendChild(hotel);
  homeWrapper.appendChild(location);

  return homeWrapper;
};

export const incrementFilterValue = (decrementBtn, incrementBtn, value, min, max) => {
  value++;

  if (value < max && value > min){
    incrementBtn.classList.add('booking__filter-btn--active');
    decrementBtn.classList.add('booking__filter-btn--active');
    return value;
  }

  incrementBtn.classList.remove('booking__filter-btn--active');

  return max;
};

export const decrementFilterValue = (decrementBtn, incrementBtn, value, min, max) => {
  value--;

  if (value > min && value < max){
    incrementBtn.classList.add('booking__filter-btn--active');
    decrementBtn.classList.add('booking__filter-btn--active');
    return value;
  }

  decrementBtn.classList.remove('booking__filter-btn--active');
  incrementBtn.classList.add('booking__filter-btn--active');

  return min;
};
