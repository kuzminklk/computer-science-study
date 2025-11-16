import { Logger } from './logger.js';

const logger = new Logger();
logger.on('messageLogged', (arg) => console.log('Message!', arg))
logger.log('Hello, world!')
