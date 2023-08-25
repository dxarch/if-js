export const showLoader = (insertBeforeEl) => {
  const loader = document.createElement('div');
  loader.classList.add('loader');

  insertBeforeEl.insertAdjacentElement('afterbegin', loader);
};

export const removeLoader = (elToRemoveFrom) => {
  const loader = document.querySelector('.loader');
  elToRemoveFrom.removeChild(loader);
};
