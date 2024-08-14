const checkPlaindrom = (n: BigInt) =>
  BigInt(n.toString().replace("n", "").split("").reverse().join("")) == n

const reverseNumber = (n: BigInt) =>
  BigInt(n.toString().replace("n", "").split("").reverse().join(""))

import { readFileSync } from "fs"

const input = BigInt("3121" ?? readFileSync("/dev/stdin").toString()) + 1n
const isEven = input.toString().length % 2 == 0

if (input < 10 || checkPlaindrom(input)) {
  console.log(input.toString().replace("n", ""))
  process.exit(0)
}

const solve = (number: BigInt) => {
  const numbers = number.toString().split("")

  if (isEven) {
    let right = BigInt(numbers.splice(numbers.length / 2).join(""))
    let left = BigInt(numbers.join(""))

    // 32 99
    // 35 44
    if (left <= right) {
      if (reverseNumber(left) >= right) {
        right = reverseNumber(left)
      } else {
        left += 1n
        right = reverseNumber(left)
      }
    } else {
      // l > r
      // 31 21
      // 21 12
      if (reverseNumber(left) < right) {
        left += 1n
        right = reverseNumber(left)
      } else {
        right = reverseNumber(left)
      }
    }

    return console.log(`${left}${right}`)
  } else {
    let _left = numbers.splice(0, Math.floor(numbers.length / 2))
    let _right = numbers

    let pivot = BigInt(_right.shift() as any)
    let left = BigInt(_left.join(""))
    let right = BigInt(_right.join(""))

    if (left <= right) {
      // 48 3 52
      if (reverseNumber(left) >= right) {
        right = reverseNumber(left)
      } else {
        // 48 9 99
        // 48 9 90
        if (pivot + 1n == 10n) {
          const howManyZero = right
            .toString()
            .split("")
            .map(() => 0)
          const num =
            BigInt(`${left}${pivot}${howManyZero}`) + BigInt(`1${howManyZero}`)

          return solve(num)
        } else {
          // 48 8 99
          pivot += 1n
          right = reverseNumber(left)
        }
      }
      // NOt MOdified below
    } else {
      // l > r
      if (reverseNumber(left) < right) {
        // 31 9 21
        // 21 9 13
        if (pivot + 1n == 10n) {
          const howManyZero = right
            .toString()
            .split("")
            .map(() => 0)
          const num =
            BigInt(`${left}${pivot}${howManyZero}`) + BigInt(`1${howManyZero}`)

          return solve(num)
        } else {
          // 31 8 21
          // 21 8 18
          pivot += 1n
          right = reverseNumber(left)
        }
      } else {
        right = reverseNumber(left)
      }
    }

    return console.log(`${left}${right}`)
  }
}

solve(input)