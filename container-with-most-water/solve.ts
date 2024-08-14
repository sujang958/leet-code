function maxArea(height: number[]): number {
  let answer = 0

  let i = 0
  let j = height.length - 1

  while (true) {
    console.log(i, j)

    if (i >= j) break

    const left = height[i]
    const right = height[j]

    const actualHeight = left > right ? right : left
    const extent = actualHeight * (j - i)

    if (extent > answer) answer = extent

    const nextRight = height[i + 1]
    const nextLeft = height[j - 1]

    if (left < right) i++ 
    else j--
  }

  return answer
}

console.log(maxArea([1, 2, 4, 3]))
