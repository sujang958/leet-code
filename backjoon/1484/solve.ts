import { readFileSync } from "fs"

const input = 10000 ?? readFileSync("/dev/stdin").toString()
const G = Number(input) // 0 < G <= 10000

// G = C^2 - P^2

let currentWeight = Math.ceil(Math.sqrt(G))
let pastWeight = 1
let exist = false

while (true) {
  const myG = currentWeight ** 2 - pastWeight ** 2

  if (myG == G) {
    console.log(currentWeight)
    exist = true
  }
  if (myG > G && currentWeight - pastWeight == 1) break
  if (myG > G) pastWeight += 1
  else currentWeight += 1
}

if (!exist) console.log(-1)
