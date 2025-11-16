
import fs from 'fs';
import fetch from 'node-fetch';



// Promise

/* const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        resolve();
    }
    else {
        reject();
    }
})

myPromise.then(() => { console.log('Success!') }).catch(() => { console.log('Error!') }); */



// FS Promises

/* fs.promises
    .readFile('./text.txt', {encoding: 'utf-8'})
    .then( (data) => {console.log(data)})
    .catch( (err) => {console.error(err)}) */



// Fetch Promises

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => response.json())
    .then((data) => { console.log(data) })
    .catch((err) => { console.error(err) })