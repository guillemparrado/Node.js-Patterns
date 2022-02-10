/*
FONTS:
 https://www.w3schools.com/nodejs/nodejs_events.asp
 */

const Usuari = require('./Usuari');
const Tema = require('./Tema');

const usuaris = Object.freeze([
    new Usuari('Pere'),
    new Usuari('Alba'),
    new Usuari('Joan')
])

const temes = Object.freeze([
    new Tema('astronomia'),
    new Tema('nutrició')
])

temes[0].subscribeUser(usuaris[0]);
temes[1].subscribeUser(usuaris[1]);
temes[1].subscribeUser(usuaris[2]);

usuaris[0].writeMessage('astronomia', 'Demà, eclipse solar a les 14:12h');
usuaris[1].writeMessage('nutrició', 'Fonts de vitamina C per combatre la covid (https://...)');
