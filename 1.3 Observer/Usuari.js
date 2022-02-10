class Usuari {
    constructor(name) {
        this.name = name;
        this.temes = new Map();
    }

    addSubscribedTema(tema){
        this.temes.set(tema.name, tema.emitter);
    }

    writeMessage(temaName, message) {
        this.temes.get(temaName).emit('new message', message);
    }

    onTemaMessage(tema, message){
        console.log(`L'usuari/a '${this.name}' ha rebut un nou missatge del tema '${tema.name}': '${message}'`)
    }
}

module.exports = Usuari;
