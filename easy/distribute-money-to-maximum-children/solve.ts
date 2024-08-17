// Each child has at least one dollar.

// Spent roughly 34 minuets

function distMoney(
  money: number,
  children: number /*minimum of children is 2 */,
): number {
  if (money / children == 8) return children
  if (money / children < 1) return -1
  if (money - children < 0) return -1
  if (money - children - 7 < 0) return 0

  // console.log("Helo?")

  let balance = money

  const childrensMoney: number[] = []

  for (let i = 0; i < children; i++) {
    balance -= 1
    childrensMoney[i] = 1
  }

  // console.log(childrensMoney, balance)
  // Now every child has one dollar

  for (let i = 0; i < children; i++) {
    // console.log(`[${i}] ${balance} ${childrensMoney}`)

    if (i + 1 == children) {
      childrensMoney[i] += balance
      balance = 0
      break
    }

    childrensMoney[i] += 7
    balance -= 7

    if (balance < 0) {
      childrensMoney[i] += balance
      balance = 0 // for the debug
      break
    }
  }

  // console.log(childrensMoney, balance)

  const without4: number[] = []

  childrensMoney.forEach((money, i, arr) => {
    if (money != 4) return (without4[i] = money)

    without4[i + 1 >= arr.length ? 0 : i + 1] += 1
    without4[i] = money - 1
  })

 console.log(without4)

  return without4.filter(money => money == 8).length
}

// 8 8 8 8 8 1 1 1 와 같이 일단은 항상 내림차순임
// 8 6 4 같은 경우는 뒤에 주는 게 맞긴 해
// 8 8 8 4 는 뒤든 앞이든
// 그러니까 마지막에선 무조건 뒤에 주도록

console.log("18, 3", distMoney(18, 3))
console.log("20, 3", distMoney(20, 3))
