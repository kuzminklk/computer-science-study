
import fs from 'fs';
import fetch from 'node-fetch';



// Load Data
/* async function loadFile() {
    try {
    const data = await fs.promises.readFile('./text.txt', { encoding: 'utf-8'});
    console.log(data); 
    }
    catch (error) {
        console.error(error)
    }
}

loadFile()
*/



// Fetch

async function fetchPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error)
    }
}

fetchPokemon();