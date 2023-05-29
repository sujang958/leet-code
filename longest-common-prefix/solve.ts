function longestCommonPrefix(strs: string[]): string {
  let prefix = ""

  for (const str of strs) {
    if (prefix.length < 1) {
      prefix = str[0]
    }
  }
}
