import fs from 'fs';

async function readDir() {
    const dir = await fs.readdir();
    console.log(dir);
}

readDir();