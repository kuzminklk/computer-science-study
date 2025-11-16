import fs from 'fs'
import path from 'path'


if (!fs.existsSync('./maked')) {
    fs.mkdir('./maked', (err) => {
        if (err) {
            throw err;
        }
        console.log('Directory created!')
    });
}
else {
   fs.rmdir('./maked', (err) => {
        if (err) {
            throw err;
        }
        console.log('Directory removed!')
    });
}