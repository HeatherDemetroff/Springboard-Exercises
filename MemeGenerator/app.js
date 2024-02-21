const form = document.querySelector('form');
const topTextInput = document.querySelector('input[name="topText"]');
const bottomTextInput = document.querySelector('input[name="bottomText"]');
const imageInput = document.querySelector('input[name="image"]');

// Creates a container to hold the memes
const memeContainer = document.createElement('div');
memeContainer.className = 'meme-container'
document.body.appendChild(memeContainer);

form.addEventListener('submit', function(event){
    event.preventDefault();
    let newMeme = document.createElement('div');
    newMeme.className = 'meme';

    // Creates elements for the top text, bottom text, and image
    let topText = document.createElement('p');
    topText.className = 'top-meme-text';
    let bottomText = document.createElement('p');
    bottomText.className = 'bottom-meme-text';
    let image = document.createElement('img');

    // Sets the text and image source to the values of the inputs
    topText.innerText = topTextInput.value;
    bottomText.innerText = bottomTextInput.value;
    image.src = imageInput.value;

    let addedButton = document.createElement('button');
    addedButton.classList.add('close-button');
    addedButton.innerText = 'X';

    // Adds meme-image class
    image.classList.add('meme-image');

    // Appends the top text, image, and bottom text to the new meme div
    newMeme.appendChild(topText);
    newMeme.appendChild(image);
    newMeme.appendChild(bottomText);
    newMeme.appendChild(addedButton);

    // Adds an event listener to the new meme that removes it when clicked
    addedButton.addEventListener('click', function() {
        memeContainer.removeChild(newMeme);
    });

    // Appends the new meme to the meme container
    memeContainer.appendChild(newMeme);
    topTextInput.value = '';
    bottomTextInput.value = '';
    imageInput.value = '';
});

document.addEventListener('click', function(e) {
    if (e.target.imageInput === 'image') {
      e.target.remove();
    }
  }); 