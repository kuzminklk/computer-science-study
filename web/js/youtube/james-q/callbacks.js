
const fs = require('fs');



// setTimeout

/* setTimeout(() => {
    console.log('Waited 1 second');
}, 1000); */



// Nested setTimeout

/* setTimeout(() => {
    console.log('1');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('3');
        }, 1000);
    }, 1000);
}, 1000); */



// Errors callback
fs.readFile('text.txt', {endcoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log(data);
    }
});
