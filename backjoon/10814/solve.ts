import { readFileSync } from "fs"

const input = readFileSync(0, "utf-8").toString().split("\n")

const list = input.slice(1)

list.sort((a, b) => Number(a.split(" ")[0]) - Number(b.split(" ")[0]))

console.log(list)