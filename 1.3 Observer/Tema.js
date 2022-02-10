const events = require('events');

class Tema {
    constructor(name) {
        this.name = name;
        this.emitter = new events.EventEmitter();
        this.emitter.on('new message', message => console.log(
            `El tema '${this.name}' ha rebut un nou missatge: '${message}'`
        ));
    }

    subscribeUser(usuari) {
        usuari.addSubscribedTema(this);
        this.emitter.on('new message', message => {
            usuari.onTemaMessage(this, message)
        })
    }
}

module.exports = Tema;
