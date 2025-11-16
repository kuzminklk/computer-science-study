import {format} from 'date-fns'
import {v4 as uuid} from 'uuid';

console.log(format(new Date(), 'yyyy.MM.dd'))
console.log(uuid())