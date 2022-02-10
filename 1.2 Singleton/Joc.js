/*
FONTS
 https://stackoverflow.com/a/6398335

 */

const marcador = require('./marcador');
const Jugador = require("./Jugador");

class Joc {
    static demo() {

        // Inicialitzo joc i jugadors
        const jugadors = Object.freeze([
            new Jugador('Alba'),
            new Jugador('Pere'),
            new Jugador('Laia'),
            new Jugador('Max')
        ])
        const joc = new Joc(jugadors);

        // Demo del joc
        joc.demo();

        // Output final
        joc.mostraMarcador();

    }

    constructor(jugadors) {
        this.jugadors = jugadors;
        for (const jugador of jugadors) {
            marcador.addPlayer(jugador);
        }
    }

    demo(){
        // Els esdeveniments dins del joc actualitzarien el marcador segons les regles del mateix joc...
        // Com que no hem implementat el joc encara, faig una demo per veure com cridaria el marcador des del joc per atualitzar les puntuacions dels jugadors
        marcador.addPoints(this.jugadors[0], 1);
        marcador.addPoints(this.jugadors[1], 5);
        marcador.addPoints(this.jugadors[2], 4);
        marcador.addPoints(this.jugadors[1], -3);
    }

    mostraMarcador() {
        console.log(marcador.scores);
        console.log(`Guanyador/a: ${marcador.winner.name}`);
    }
}

// Si el mòdul és cridat directament (punt d'entrada de l'aplicació) en comptes de ser requerit per un altre mòdul
if (require.main === module) {
    // Executa demo
    Joc.demo();
}

module.exports = Joc;
