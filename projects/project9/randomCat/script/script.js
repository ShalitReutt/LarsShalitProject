const catImage = document.getElementById('catImage');
const generateButton = document.getElementById('generateButton');

generateButton.addEventListener('click', () => {
  fetch('https://cataas.com/cat')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      const imageURL = URL.createObjectURL(blob);
      catImage.src = imageURL;
    })
    .catch(error => {
      console.error('Error fetching cat image:', error);
    });
});
