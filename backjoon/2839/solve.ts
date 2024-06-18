import { readFileSync } from "fs"

const factorize = (n: number) => {
  let result = []
  let divisor = 2

  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor)
      n = n / divisor
    } else divisor++
  }

  return result
}

const solve = (kg: number) => {
  const factors = factorize(kg)

  if (factors.filter((n) => n != 3 && n != 5).length >= 1) return console.log(-1)
  
  console.log(factors.length)
}

// const kg = Number(readFileSync(0, "utf-8").trim())

solve(15)
