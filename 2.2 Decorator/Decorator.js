/*
FONTS:
 https://www.sitepoint.com/javascript-decorators-what-they-are/
 https://www.telerik.com/blogs/decorators-in-javascript
 https://www.simplethread.com/understanding-js-decorators/
 */

const fs = require('fs');
const filePath = './currency_conversions.json';

/*
DISCUSSIÓ: si ho he entès bé, la idea és fer un closure que contingui l'objecte amb les conversions i que el file només s'hagi de llegir un cop: a l'hora de construïr la funció que es retorna (quan es crida el decorator), en comptes de fer-ho cada cop que es cridi la funció retornada. L'avantatge respecte a posar el readFilefora de la funció Decorator() seria que farem el load cada cop que cridem el decorator: tindrem el control des de l'aplicació de decidir si volem fer servir la cache del closure o si toca fer un reload del file i construir una nova funció toEuros() amb aquest.
 */
function Decorator(){
    const json = fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'});
    const conversions = JSON.parse(json);

    return function toEuros(amount, currency){
        return (amount * conversions[`${currency}_EUR`]).toFixed(2);
    }
}

module.exports = Decorator;
