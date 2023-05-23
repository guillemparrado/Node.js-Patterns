
const marcador = require('./marcador');
const Jugador = require("./Jugador");

class Joc {
    constructor(jugadors) {
        this.jugadors = jugadors;
        for (const jugador of jugadors) {
            marcador.addPlayer(jugador);
        }
    }

    mostraMarcador() {
        console.log(marcador.scores);
        console.log(`Guanyador/a: ${marcador.winner.name}`);
    }
}

module.exports = Joc;
