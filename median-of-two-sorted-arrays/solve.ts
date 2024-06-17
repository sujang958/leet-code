function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged: number[] = [...nums1, ...nums2]
    .sort((a, b) => a - b)
    .filter((v) => typeof v === "number")
  const index = merged.length / 2
  
  if (merged.length % 2 == 0) return (merged[index - 1] + merged[index]) / 2
  else return merged[Math.floor(index)]
}
