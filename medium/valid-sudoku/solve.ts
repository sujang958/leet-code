const checkDuplicated = (arr: string[]) => new Set(arr).size !== arr.length

function isValidSudoku(board: string[][]): boolean {
  // horizontal
  for (const i of board) {
    let past: string[] = []

    for (const j of i.filter((v) => !v.includes("."))) {
      if (past.includes(j)) {
        console.log("HELL1;")
        return false
      }
      past.push(j)
    }
  }

  // vertical
  for (let i = 0; i < 9; i++) {
    let past: string[] = []

    for (let j = 0; j < 9; j++) past.push(board[j][i])

    console.log(past)

    if (checkDuplicated(past.replace)) {
      console.log("HELL2;")
      return false
    }
  }

  for (let i = 0; i < 9; i += 3) {
    const b1 = [[...board[i]], [...board[i + 1]], [...board[i + 2]]]

    const b2 = [b1[0].splice(3, 3), b1[1].splice(3, 3), b1[2].splice(3, 3)]

    const b3 = [b1[0].splice(3, 3), b1[1].splice(3, 3), b1[2].splice(3, 3)]

    const square1 = [b1, b2, b3].flat(1)
    const square2 = square1.splice(3, 3)
    const square3 = square1.splice(3, 3)

    if (
      checkDuplicated(square1.flat(1).filter((v) => v != ".")) ||
      checkDuplicated(square2.flat(1).filter((v) => v != ".")) ||
      checkDuplicated(square3.flat(1).filter((v) => v != "."))
    ) {
      console.log("HELL3;")
      return false
    }
  }

  return true
}

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
)
