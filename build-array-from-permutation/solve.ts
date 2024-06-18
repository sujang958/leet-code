function buildArray(nums: number[]): number[] {
  const newNums: number[] = []

  for (const i in nums) 
    newNums[i] = nums[nums[i]]

  return newNums
}
