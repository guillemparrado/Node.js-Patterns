/*
    Descomposició funcional
 */

const fs = require("fs");
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

async function start() {
    try{
        const filenames = await getFileNames();
        for (const filename of filenames) {
            await processFile(filename);
        }
    }
    catch(error){
        logError(error)
    }

}

async function getFileNames() {
    return new Promise((resolve, reject) => {
        fs.readdir(inbox, (error, filenames) => {
            if (error)  reject('Folder inaccessible');
            else        resolve(filenames);
        })
    })
}

async function processFile(filename) {
    try{
        const data = await readFile(filename);
        const result = await writeReversed(filename, data);
        console.log(result);
    }
    catch(error){
        logError(error);
    }
}

async function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(join(inbox, filename), "utf8", (error, data) => {
            if (error)  reject('Folder inaccessible');
            else        resolve(data);
        })
    })
}

async function writeReversed(filename, data){
    return new Promise((resolve, reject) => {
        fs.writeFile(join(outbox, filename), reverseText(data), error => {
            if (error)  reject('File could not be saved!');
            else        resolve(`${filename} was successfully saved in the outbox!`);
        });
    })
}

const logError = error => console.log(`Error: ${error}`);

start();
