import { readFileSync } from "fs"

const line = readFileSync(0, "utf-8").trim()

const ucpc = line
  .replace(/ /gi, "")
  .replace(/[a-z]/g, "")

if (ucpc == "UCPC") console.log("I love UCPC")
else console.log("I hate UCPC")
