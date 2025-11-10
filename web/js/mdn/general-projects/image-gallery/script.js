const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// 1. Declare an array of objects containing image file names & alt text

const images = [
    {
        name: 'pic1', alt: 'Closeup of a human eye'
    },
    {
        name: 'pic2', alt: 'Rock that looks like a wave'
    },
    {
        name: 'pic3', alt: 'Purple and white pansies'
    },
    {
        name: 'pic4', alt: `Section of wall from a pharaoh's tomb`
    },
    {
        name: 'pic5', alt: 'Large moth on a leaf'
    },
]

// 2. Loop through the images

for (const image of images) {
    const img = document.createElement('img');
    img.src = `images/${image.name}.jpg`;
    img.alt = image.alt;
    img.tabIndex = 0;
    thumbBar.appendChild(img);
    img.addEventListener('click', (event) => {updateDisplayedImage(event)});
    img.addEventListener('keydown', (event) => {updateDisplayedImageKey(event)});
}

// 3. Create the updateDisplayedImage() function

function updateDisplayedImage(event) {
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.alt;
}

function updateDisplayedImageKey(event) {
    if (event.key === 'Enter') {
        displayedImage.src = event.target.src;
        displayedImage.alt = event.target.alt;
    }
}


// 4. Wire up the Darken/Lighten button

btn.addEventListener('click', (event) => {
    if(event.target.classList.contains('dark')) {
        event.target.textContent = 'Lighter';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0.5)';
    }
    else {
        event.target.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0)';
    }
    event.target.classList.toggle('dark');
})