export const findHotels = async (url, queryLowercase) => {
  const response = await fetch(`${url}?search=${queryLowercase}`, {
    method: 'GET',
    'content-type': 'application/json',
  });

  const data = await response.json();
  const filteredData = data.filter((item) => {
    const details = [
      item.name.toLowerCase(),
      item.city.toLowerCase(),
      item.country.toLowerCase(),
    ];
    return details.some((el) => el.includes(queryLowercase));
  });

  // if (filteredData.length === 0) {
  //     return Promise.reject('No results');
  // }

  const prevHotels = document.querySelector('.hotels');
  if (prevHotels) {
    prevHotels.remove();
  }

  const hotelsSectionEl = document.createElement('section');
  hotelsSectionEl.classList.add('hotels');

  const hotelItemsHtml = filteredData
    .map((item) => {
      return `
                <figure class="flex flex__col slides__item col-lg-3 col-sm-3">
                   <img class="slides__image" src=${item.imageUrl} alt=${item.name}>
                   <figcaption class="slides__caption slides__caption--primary">${item.name}</figcaption>
                   <p class="slides__caption slides__caption--secondary">${item.city}, ${item.country}</p>
                </figure>`;
    })
    .join('');

  hotelsSectionEl.innerHTML += `<div class="wrapper">
            <h2 class="heading heading--hotels">Available hotels</h2>
            <p class="hotels__results">Hotels found: ${filteredData.length}</p>
            <div class="relative col-lg-12">
                <div class="slides">
                    ${hotelItemsHtml}
                </div>
            </div>
        </div>
    `;

  if (filteredData.length > 4) {
    const hotelsSlidesContainer = hotelsSectionEl.querySelector('.relative');
    hotelsSlidesContainer.innerHTML += `
                <div class="slides__carousel slides__carousel--homes">
                    <button class="slides__arrow slides__arrow--left">
                        <svg class="arrow__icon">
                            <use href="src/images/sprites/icons.svg#arrow-right"></use>
                        </svg>
                    </button>
                    <button class="slides__arrow slides__arrow--right">
                        <svg class="arrow__icon">
                            <use href="src/images/sprites/icons.svg#arrow-right"></use>
                        </svg>
                    </button>
                </div>
        `;
  }

  return hotelsSectionEl;
};
