/*
FONTS:
    - http://callbackhell.com/
    - https://medium.com/velotio-perspectives/understanding-node-js-async-flows-parallel-serial-waterfall-and-queues-6f9c4badbc17
    - https://caolan.github.io/async/v3/
    - https://www.youtube.com/watch?v=mNt_-uEuLxc
 */

/*
    DISCUSSIÓ:
    Async és un mòdul amb utilitats per treballar amb funcions asíncrones en javascript.
    Waterfall és una funció d'async que rep un array de callbacks i un callback a executar en cas d'error.
        - primer callback rep callback de funció següent
        - 2n i següents callbacks a més reben en 1r paràmetre el resultat del callback anterior
        - no mapa directament un callback amb el següent sinó que la funció de callback admet dos paràmetres, per ordre: error, resultat
        - En cas d'error, para execució normal de callbacks i executa funció d'error
        - En cas de resultat sense error, executa callback següent tot passant el resultat
    La meva implementació:
        - Disposa de npm scripts i folders d'input/oput amb tests files per comprovar que la solució funciona
        - Consta de dos waterfalls, ja que el callback_hell original consta de dos processos: 1) obtenir tots els files d'un directori, 2) processar els arxius del directori. El primer es dona un cop i el segon tants cops com arxius tingui el directori.
 */

const {
    readdir,
    readFile,
    writeFile
} = require("fs");
const {
    join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
    str
        .split("")
        .reverse()
        .join("");


const { waterfall } = require('async');

waterfall([
    callback => {
        readdir(inbox, (error, files) => {
            if(error)   callback('Folder inaccessible', null)
            else        callback(null, files)
        })
    },
    files => {
        for (const file of files) {
            processFile(file);
        }
    }
], (error) => {
    if(error)   logError(error);
})

const processFile = file => {
    waterfall([
        callback => {
            readFile(join(inbox, file), "utf8", (error, data) => {
                if(error)   callback('Folder inaccessible', null);
                else        callback(null, data);
            })
        },
        (data, callback) => {
            writeFile(join(outbox, file), reverseText(data), error => {
                if(error)   callback('File could not be saved!', null);
                else        callback(null, `${file} was successfully saved in the outbox!`);
            });
        }
    ], (error, result) => {
        if(error)   logError(error);
        else        console.log(result);
    })
}

const logError = error => console.log(`Error: ${error}`);
