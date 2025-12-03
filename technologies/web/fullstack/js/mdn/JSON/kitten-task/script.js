const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

// Don't edit the code above here!

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here

    let catsObjects = JSON.parse(catString);
    for (const cat of catsObjects) {
        for (const kitten of cat.kittens) {
            total++;
            if (kitten.gender === 'm') {
                male++;
            }
        }
        if (cat === catsObjects[catsObjects.length - 1])
        {
            motherInfo += `and ${cat.name}.`;
            break;
        }
        else {
            motherInfo += `${cat.name}, `;
        }
    }

    kittenInfo = `Total: ${total}; males: ${male}; females: ${total - male}`

  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}
