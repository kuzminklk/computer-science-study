
const os = require('os');
const path = require('path');
const math = require('./export-common-js.js')
const {add, substract} = require('./export-common-js.js')

console.log(os.type());
console.log(__dirname);
console.log(path.basename(__filename))

console.log(path.parse(__filename))

console.log(math.add(1,6567));
console.log(add(1,62567));
