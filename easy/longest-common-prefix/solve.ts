function longestCommonPrefix(strs: string[]): string {
  const shortest = strs.reduce((prev, current) => {
    if (prev.length <= current.length) return prev
    else return current
  })

  return shortest.slice(
    0,
    shortest
      .split("")
      .map((_, i, arr) =>
        strs.filter((str) => str.startsWith(arr.slice(0, i + 1).join("")))
      )
      .filter((v) => v.length == strs.length).length
  )
}

console.log(longestCommonPrefix(["ap", "ap", "ap", "appppp", "app", "appp"]))
