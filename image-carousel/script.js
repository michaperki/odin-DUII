// image carousel script

// get the container
const container = document.querySelector('.content');

// add a wide div to the container
const wideDiv = document.createElement('div');
wideDiv.classList.add('wide');
container.appendChild(wideDiv);

// add a div to the wide div
const div = document.createElement('div');
div.classList.add('image-carousel');
wideDiv.appendChild(div);

// add a div to the image carousel div
const div2 = document.createElement('div');
div2.classList.add('image-carousel__images');
div.appendChild(div2);

// add a div to the image carousel div
const div3 = document.createElement('div');
div3.classList.add('image-carousel__buttons');
div.appendChild(div3);

// add a button to the buttons div
const button = document.createElement('button');
button.classList.add('image-carousel__button');
button.classList.add('image-carousel__button--prev');
button.textContent = '<';
div3.appendChild(button);

// add a button to the buttons div
const button2 = document.createElement('button');
button2.classList.add('image-carousel__button');
button2.classList.add('image-carousel__button--next');
button2.textContent = '>';
div3.appendChild(button2);

// add a div to the images div
const div4 = document.createElement('div');
div4.classList.add('image-carousel__images');
div2.appendChild(div4);

// add an image to the images div
const img = document.createElement('img');
img.src = 'https://picsum.photos/200/300';
img.classList.add('image-carousel__image');

// add an image to the images div
const img2 = document.createElement('img');
img2.src = 'https://picsum.photos/200/400';
img2.classList.add('image-carousel__image');

// add an image to the images div
const img3 = document.createElement('img');
img3.src = 'https://picsum.photos/200/500';
img3.classList.add('image-carousel__image');

// add an image to the images div
const img4 = document.createElement('img');
img4.src = 'https://picsum.photos/200/600';
img4.classList.add('image-carousel__image');

// add an image to the images div
const img5 = document.createElement('img');
img5.src = 'https://picsum.photos/200/700';
img5.classList.add('image-carousel__image');

// add the images to the images div
div4.appendChild(img);

// add the images to the images div
div4.appendChild(img2);

// add the images to the images div
div4.appendChild(img3);

// add the images to the images div
div4.appendChild(img4);

// add the images to the images div
div4.appendChild(img5);

// add event listeners to the buttons
button.addEventListener('click', () => {
    const images = document.querySelectorAll('.image-carousel__image');
    const firstImage = images[0];
    const lastImage = images[images.length - 1];
    firstImage.remove();
    div4.appendChild(firstImage);
});

button2.addEventListener('click', () => {
    const images = document.querySelectorAll('.image-carousel__image');
    const firstImage = images[0];
    const lastImage = images[images.length - 1];
    lastImage.remove();
    div4.prepend(lastImage);
});

// how to hide the images that are not in the carousel?
// answer : use overflow hidden on the images div in t