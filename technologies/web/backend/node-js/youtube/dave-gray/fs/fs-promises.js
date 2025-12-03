import fs from 'fs'
import path from 'path'


const generalPath = path.join(import.meta.dirname, 'text-promises')

const articlePath = path.join(generalPath, 'article.txt');
const newArticlePath = path.join(generalPath, 'new-article.txt');
const appendArticlePath = path.join(generalPath, 'append-article.txt');

async function fileOps() {
    try {
        const data = await fs.promises.readFile(articlePath, 'utf8')
        console.log(data);
        await fs.promises.writeFile(newArticlePath, data)
        await fs.promises.appendFile(newArticlePath, '\n Hmm...')
        await fs.promises.rename(newArticlePath,path.join(generalPath, 'renamed-new-article.txt'))
        // Delete await fs.promises.unlink(articlePath)
    }
    catch (err) {
        console.error(err);
    }
}

fileOps();