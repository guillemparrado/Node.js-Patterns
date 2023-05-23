const { readdir, readFile, writeFile, promises } = require('fs')

const { join } = require("path")
const inbox = join(__dirname, "inbox")
const outbox = join(__dirname, "outbox")

const reverseText = (str) => str.split("").reverse().join("")

const processFiles = async () => {
  try {
    const files = await promises.readdir(inbox)
    for (const file of files) {
      const data = await promises.readFile(join(inbox, file), "utf8")
      const reversedData = reverseText(data);
      await promises.writeFile(join(outbox, file), reversedData)
      console.log(`${file} was successfully saved in the outbox!`)
    }
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

processFiles()
