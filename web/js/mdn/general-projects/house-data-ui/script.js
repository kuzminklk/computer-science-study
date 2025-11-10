const streetSelect = document.getElementById("choose-street");
const bedroomSelect = document.getElementById("choose-bedrooms");
const bathroomSelect = document.getElementById("choose-bathrooms");
const form = document.querySelector("form");

const resultCount = document.getElementById("result-count");
const output = document.getElementById("output");

const dataURL = 'https://mdn.github.io/shared-assets/misc/houses.json'

let streets = [];
let houses;
let bedroomsMaxNumber = 1;
let bathroomsMaxNumber = 1;


// Create fetchHouseData() function here

function fetchHouseData() {
	fetch(dataURL)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`)
			}
			return response.json();
		})
		.then(json => {
			houses = json;
			initializeForm()
		})
		.catch(error => console.error(`Fetch problem: ${error.message}`))
}


function initializeForm() {
	pickOutStreets();
	for (const street of streets) {
		let option = document.createElement('option');
		option.textContent = street;
		streetSelect.appendChild(option);
	}
	pickOutBedrooms();
	for (let i = 1; i <= bedroomsMaxNumber; i++) {
		let option = document.createElement('option');
		option.textContent = i;
		bedroomSelect.appendChild(option);
	}
	pickOutBathrooms();
	for (let i = 1; i <= bathroomsMaxNumber; i++) {
		let option = document.createElement('option');
		option.textContent = i;
		bathroomSelect.appendChild(option);
	}
}


function pickOutStreets() {
	for (const house of houses) {
		if (!streets.includes(house.street)) {
			streets.push(house.street);
		}
	}
}

function pickOutBedrooms() {
	for (const house of houses) {
		if (house.bedrooms > bedroomsMaxNumber) {
			bedroomsMaxNumber = house.bedrooms;
		}
	}
}

function pickOutBathrooms() {
	for (const house of houses) {
		if (house.bathrooms > bathroomsMaxNumber) {
			bathroomsMaxNumber = house.bathrooms;
		}
	}
}


function renderHouses(e) {
	// Stop the form submitting
	e.preventDefault();

	// Add rest of code here
	let filteredHouses = houses.filter(filterHouses)
	resultCount.textContent = `Results returned: ${filteredHouses.length}`;
	output.replaceChildren();

	function renderHouse(house) {
		let totalArea = 0;
		for (const [room, area] of Object.entries(house.room_sizes)) {
			totalArea += area;
		}
		let article = document.createElement('article');

		article.innerHTML = 
		`<h2>${house.house_number} ${house.street}</h2>
		<ul>
			<li>🛏️ Bedrooms: ${house.bedrooms}</li>
			<li>🛀 Bathrooms: ${house.bathrooms}</li>
			<li>Room area: ${totalArea} m²</li>
			<li>Price: £${house.price}</li>
		</ul>`

		output.appendChild(article);
	}

	for (const house of filteredHouses) {
		renderHouse(house);
	}
}


function filterHouses(house) {
	if ((house.street === streetSelect.value || streetSelect.value === '')
		&& (String(house.bedrooms) === bedroomSelect.value || bedroomSelect.value === '')
		&& (String(house.bathrooms) === bathroomSelect.value || bathroomSelect.value === '')
	) {
		return true;
	}
	else {
		return false
	}
}

// Add a submit listener to the <form> element
form.addEventListener("submit", renderHouses);

// Call fetchHouseData() to initialize the app
fetchHouseData();
