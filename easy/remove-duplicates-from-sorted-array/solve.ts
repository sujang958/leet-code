function removeDuplicates(nums: (number | string)[]): number {
  // nums = Array.from(new Set(nums))

  nums = (nums.map((num, i, arr) => !arr.includes(num, i + 1) ? num : "_"))

  // console.log(nums)

  return nums.length
};

removeDuplicates([1, 1, 2, 2])