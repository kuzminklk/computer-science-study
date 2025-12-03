
import os from 'os';
import path from 'path';
import {add} from './export-es6.js';

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(path.parse(import.meta.filename));

console.log(add(123,213));