const fs = require('node:fs/promises');

const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

eventEmitter.on('', () => {
    console.log('started')
})

eventEmitter.emit('start');