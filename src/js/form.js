const form = document.forms.form;
const fileInput = form.elements.file;
const formImage = document.querySelector('.form__image-container');

fileInput.addEventListener('change', async (e) => {
  const file = fileInput.files[0];

  if (file.type.startsWith('image/')) {
    const reader = new FileReader();
    const promise = new Promise((resolve) => {
      reader.addEventListener('load', (e) => {
        resolve(e.target.result);
      });
    });

    reader.readAsDataURL(file);

    const readResult = await promise;
    formImage.innerHTML = `<img class='form__image' src=${readResult} alt='user image'>`;
  } else {
    formImage.innerHTML = `File is not an image: ${file.name}`;
    fileInput.value = '';
  }
});

formImage.addEventListener('click', (e) => {
  fileInput.click();
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (fileInput.files.length > 0) {
    const formData = new FormData(form);
    const fetchOptions = {
      method: 'POST',
      body: formData,
    };

    const result = await fetch(
      'https://if-student-api.onrender.com/api/file',
      fetchOptions,
    );
    console.log(result);
  }
});
