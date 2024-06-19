function longestAlternatingSubarray(nums: number[], threshold: number): number {
  // e o e o
  let answer = []

  for (let l = 0; l < nums.length; l++) {
    if (nums[l] % 2 != 0) continue
    if (nums[l] > threshold) continue

    let end = l

    for (let r = l + 1; r < nums.length; r++) {
      if (!(nums[r] % 2 != nums[r - 1] % 2)) break
      if (nums[r] > threshold) break

      end += 1
    }

    const result = nums.slice(l, end + 1)

    // console.log(l, end, result)

    if (result.length > answer.length) answer = result
  }

  return answer.length
}
