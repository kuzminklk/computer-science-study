import EventsEmitter from 'events';

class Logger extends EventsEmitter {
    log(message) {
        console.log(message)
        this.emit('messageLogged', { name: 'Jonh' });
    }
}

export { Logger }