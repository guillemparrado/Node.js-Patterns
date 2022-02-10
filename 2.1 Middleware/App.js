
const fs = require('fs');
const filePath = './operacions.json';
const Calculadora = require('./Calculadora');
const json = fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'});


//--- SENSE MIDDLEWARE
let operacions = JSON.parse(json)['operations'];
let calc = new Calculadora(operacions);

console.log(`------------------`)
console.log(`Operacions sense middleware`)
console.log(`------------------`)
calc.resol();

//--- AMB MIDDLEWARE
operacions = JSON.parse(json)['operations'];
calc = new Calculadora(operacions);

// Defineix funcions de middleware
calc.use('quadrat', op => {
    op.left = Math.pow(op.left, 2);
    op.right = Math.pow(op.right, 2);
})
    .use('cub', op => {
        op.left = Math.pow(op.left, 3);
        op.right = Math.pow(op.right,3);
    })
    .use('meitat', op => {
        op.left /= 2;
        op.right /= 2;
    });

// Resolc
console.log(`------------------`)
console.log(`Operacions amb middleware`)
console.log(`------------------`)
calc.resol();
