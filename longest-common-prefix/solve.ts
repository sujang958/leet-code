function longestCommonPrefix(strs: string[]): string {
  let prefix = ""

  let i = 0
  let isEnd = false

  while (!isEnd) {
    if (isEnd) break

    for (const str of strs) {
      if (i % prefix.length == 0) prefix += str[i]
      if (prefix.at(-1) !== str[i]) {
        if (i < 1) prefix = ""

        isEnd = true
        break
      }
    }

    i += 1
  }
// TODO: solve this
  return prefix
}

console.log(longestCommonPrefix(["ap", "app", "appp"]))