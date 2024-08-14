const checkPlaindrom = (n: number) =>
  Number(n.toString().replace("n", "").split("").reverse().join("")) == n

const reverseString = (str: string) => str.split("").reverse().join("")

const reverseNumber = (n: number) =>
  Number(n.toString().replace("n", "").split("").reverse().join(""))

import { readFileSync } from "fs"

// 9999 12916

const input = Number("518012348021380" ?? readFileSync("/dev/stdin").toString()) + 1
const isEven = input.toString().length % 2 == 0

if (input < 10 || checkPlaindrom(input)) {
  console.log(input.toString().replace("n", ""))
  process.exit(0)
}

const solve = (number: number) => {
  const numbers = number.toString().split("")

  let answer = ""

  if (isEven) {
    let right = Number(numbers.splice(numbers.length / 2).join(""))
    let left = Number(numbers.join(""))

    // 32 99
    // 35 44
    if (left <= right) {
      if (reverseNumber(left) >= right) {
        answer = `${left}${reverseString(left.toString())}`
      } else {
        left += 1
        answer = `${left}${reverseString(left.toString())}`
      }
    } else {
      // l > r
      // 31 21
      // 21 12
      if (reverseNumber(left) < right) {
        left += 1
        answer = `${left}${reverseString(left.toString())}`
      } else {
        answer = `${left}${reverseString(left.toString())}`
      }
    }

    return console.log(answer)
  } else {
    let _left = numbers.splice(0, Math.floor(numbers.length / 2))
    let _right = numbers

    let pivot = Number(_right.shift() as any)
    let left = Number(_left.join(""))
    let right = Number(_right.join(""))

    // 10000
    // 12934

    if (left <= right) {
      // 48 3 52
      if (reverseNumber(left) >= right) {
        answer = `${left}${pivot}${reverseString(left.toString())}`
      } else {
        // 48 9 99
        // 48 9 90
        if (pivot + 1 == 10) {
          const howManyZero = right
            .toString()
            .split("")
            .map(() => 0)
            .join("")
          const num =
            Number(`${left}${pivot}${howManyZero}`) + Number(`1${howManyZero}`)

          return solve(num)
        } else {
          // 48 8 99
          pivot += 1
          answer = `${left}${pivot}${reverseString(left.toString())}`
        }
      }
      // NOt MOdified below
    } else {
      // l > r
      if (reverseNumber(left) < right) {
        // 31 9 21
        // 21 9 13
        if (pivot + 1 == 10) {
          const howManyZero = right
            .toString()
            .split("")
            .map(() => 0)
            .join("")
          const num =
            Number(`${left}${pivot}${howManyZero}`) + Number(`1${howManyZero}`)

          return solve(num)
        } else {
          // 31 8 21
          // 21 8 18
          pivot += 1
          answer = `${left}${pivot}${reverseString(left.toString())}`
        }
      } else {
        answer = `${left}${pivot}${reverseString(left.toString())}`
      }
    }

    return console.log(answer)
  }
}

solve(input)
