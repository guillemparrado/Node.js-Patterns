
const marcador = require('./marcador')
const Jugador = require("./Jugador")
const Joc = require("./Joc")

// Inicialitzo joc i jugadors
const jugadors = Object.freeze([
    new Jugador('Alba'),
    new Jugador('Pere'),
    new Jugador('Laia'),
    new Jugador('Max')
])
const joc = new Joc(jugadors)

// Demo del joc
// Els esdeveniments dins del joc actualitzarien el marcador segons les regles del mateix joc...
// Com que no hem implementat el joc encara, faig una demo per veure com cridaria el marcador des del joc per atualitzar les puntuacions dels jugadors
marcador.addPoints(joc.jugadors[0], 1);
marcador.addPoints(joc.jugadors[1], 5);
marcador.addPoints(joc.jugadors[2], 4);
marcador.addPoints(joc.jugadors[1], -3);

// Output final
joc.mostraMarcador()