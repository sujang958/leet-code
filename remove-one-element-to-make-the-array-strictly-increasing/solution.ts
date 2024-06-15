const toSorted = (arr: number[]) => [...arr].sort((a, b) => a - b)
const compareTwoArrays = (arr1: number[], arr2: number[]) =>
  !arr1.some((v, i) => v != arr2[i]) // if they're the same, it returns true

function canBeIncreasing(nums: number[]): boolean {
  let answer = false

  for (const i in nums) {
    let temp = nums[i]

    delete nums[i]

    const unsorted = nums.filter((v) => v)
    const sorted = toSorted(unsorted)

    answer = compareTwoArrays(unsorted, sorted)

    if (Array.from(new Set(sorted)).length != sorted.length) answer = false
    else if (answer) return answer

    nums[i] = temp
  }

  return answer
}

console.log(canBeIncreasing([1, 1, 1]))
