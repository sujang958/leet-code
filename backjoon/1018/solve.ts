import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let i = 0

let columns = 0
let rows = 0

let board = ""

rl.on("line", (line) => {
  if (i == 0) {
    ;[columns, rows] = line.split(" ").map(Number)
    i += 1

    return
  }

  board += line
}).on("close", function () {
  process.exit()
})
