
import fs from 'fs'
import path from 'path'

const generalPath = path.join(import.meta.dirname, 'text-stream')
const articlePath = path.join(generalPath, 'article.txt');
const articleEditPath = path.join(generalPath, 'article-edit.txt');

const rs = fs.createReadStream(articlePath);
const ws = fs.createWriteStream(articleEditPath);

rs.on('data', (dataChunk) => {
    console.log(dataChunk.toString());
})

rs.pipe(ws)