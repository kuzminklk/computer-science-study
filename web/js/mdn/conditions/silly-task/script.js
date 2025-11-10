// 1. COMPLETE VARIABLE DEFINITIONS AND RANDOM FUNCTION

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// 2.

const characters = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
]

const places = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
]

const events = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and slithered away'
]

// 3. PARTIAL RETURN RANDOM STRING FUNCTION

function returnRandomStoryString() {
    let randomCharacter = randomValueFromArray(characters);
    let randomPlace = randomValueFromArray(places);
    let randomEvent = randomValueFromArray(events);
    let storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`
    return storyText;
}

// 4. EVENT LISTENER AND PARTIAL GENERATE FUNCTION DEFINITION

generateBtn.addEventListener("click", generateStory);

function generateStory() {

    let newStory = returnRandomStoryString();

    if (customName.value !== "") {
        const name = customName.value;
        newStory = newStory.replaceAll('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300/14) + ' stone';
        const temperature = (Math.round((94-13)/1.8)) + ' Celsius';
        newStory = newStory.replaceAll('300 pounds', weight);
        newStory = newStory.replaceAll('94 Fahrenheit', temperature);
    }

    // TODO: replace "" with the correct expression
    story.textContent = newStory;
    story.style.visibility = "visible";
}