
import EventsEmitter from 'events';



const emitter = new EventsEmitter();

emitter.on('messageLogged', (arg) => console.log('Message!', arg))

emitter.emit('messageLogged', {name: 'Jonh'});