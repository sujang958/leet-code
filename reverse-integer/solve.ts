function reverse(x: number): number {
  let reversed: string = String(x).split("").reverse().join("").trim()
  let number = 0
  if (reversed[reversed.length - 1] === "-")
    number = Number(`-${reversed.slice(0, reversed.length - 1)}`)
  else number = Number(reversed)

  if (number < -(2 ** 31) || number > 2 ** 31 - 1) return 0
  return number
}
