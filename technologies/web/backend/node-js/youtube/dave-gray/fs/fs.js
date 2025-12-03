import fs from 'fs'
import path from 'path'


const generalPath = path.join(import.meta.dirname, 'text')

const articlePath = path.join(generalPath, 'article.txt');
const newArticlePath = path.join(generalPath, 'new-article.txt');
const appendArticlePath = path.join(generalPath, 'append-article.txt');

fs.readFile(articlePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

process.on('uncaughtException', (err) => {
    console.error(err.toString());
    process.exit(1);
});

fs.writeFile(newArticlePath, 'Hello, world!', (err) => {
    if (err) throw err;
});

fs.appendFile(appendArticlePath, 'Hello, world!', (err) => {
    if (err) throw err;
    fs.rename(appendArticlePath, path.join(generalPath, 'new-append-article.txt'), (err) => {
        if (err) throw err;
    });
});

