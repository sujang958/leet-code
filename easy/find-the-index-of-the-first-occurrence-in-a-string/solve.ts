function strStr(haystack: string, needle: string): number {
  // return haystack.indexOf(needle) too ez

  let answer = -1

  for (let i = 0; i < haystack.length; i++)
    if (haystack.slice(i, i + needle.length) == needle) return i

  return answer
}
