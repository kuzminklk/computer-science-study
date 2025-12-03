import { logEvent } from './logEvent.js'
import EventEmitter from 'events';

// Extend class
class MyEmitter extends EventEmitter {};

// Initialize object
const myEmitter = new MyEmitter();

// Add listener
myEmitter.on('log', (msg) => logEvent(msg));

// Test
setTimeout(() => {
    myEmitter.emit('log', 'Log event is emitted!');
}, 1000)