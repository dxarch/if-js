const form = document.forms.form;
const fileInput = form.elements.file;
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
