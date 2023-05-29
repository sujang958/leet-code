function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i]
    for (const indexOfNum2 in nums) {
      if (Number(indexOfNum2) == i) continue
      if (num1 + nums[indexOfNum2] !== target) continue

      return [i, Number(indexOfNum2)]
    }
  }

  return []
}

console.log(twoSum([2, 7, 14], 9))