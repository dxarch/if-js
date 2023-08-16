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

export const showHomes = (homesContainer, homes) => {
  homes.map((obj) => {
    const home = createNewHomesItem(obj);
    homesContainer.appendChild(home);
  });
};

export const fetchHomes = async (url) => {
  if (!sessionStorage.getItem('homesData')) {
    const response = await fetch(url, {
      method: 'GET',
    });
    let result;

    if (response.ok) {
      result = await response.json();
    } else {
      throw new Error(
        `Fetch error! ${response.status} - ${response.statusText}`,
      );
    }

    sessionStorage.setItem('homesData', JSON.stringify(result));
    return result;
  } else {
    return JSON.parse(sessionStorage.getItem('homesData'));
  }
};
