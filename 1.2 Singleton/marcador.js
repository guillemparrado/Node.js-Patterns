/*
FONTS:
 https://medium.com/@bretcameron/singletons-in-javascript-59655927b7d7
 https://www.sitepoint.com/javascript-private-class-fields/
 https://stackoverflow.com/a/29977213
 https://stackoverflow.com/a/27376667
 */


class Marcador {

    constructor() {
        this.scores = new Map();
    }

    addPlayer(jugador){
        this.scores.set(jugador, 0);
    }

    get winner(){
        let maxScore, maxPlayer;
        for (const jugador of this.scores.keys()) {
            if(!maxScore ||
                this.scores.get(jugador) > maxScore) {
                maxPlayer = jugador;
                maxScore = this.scores.get(jugador);
            }
        }
        return maxPlayer;
    }

    // Ens podem estalviar la funció de decrement perquè el num de punts pot ser negatiu
    addPoints(jugador, numDePunts){
        this.scores.set(
            jugador,
            this.scores.get(jugador) + numDePunts
        );
    }
}

/*
    RAONAMENT SINGLETON: marcador.js només s'executa un cop encara que se'n faci més d'un require a l'app + la classe Marcador no s'exporta i per tant no serà visible des de l'app + marcador.js crea una sola instància i l'exporta -implementant així el mecanisme de còpia única + marcador.js escrit en minúscula per notar que el que exporta l'script és l'objecte d'instància i no la classe.
 */
module.exports = new Marcador();
