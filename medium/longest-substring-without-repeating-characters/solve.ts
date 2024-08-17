function lengthOfLongestSubstring(s: string): number {
  const candidates: string[] = []

  for (let i = 0; i <= s.length; i++) {
    let letter = s[i]

    for (const j of s.slice(i + 1)) {
      if (!letter.includes(j)) letter += j
      else break
    }

    candidates.push(letter)
  }

  candidates.sort((a, b) => b.length - a.length)

  return candidates[0]?.length ?? 0
}

lengthOfLongestSubstring("abcdef")
lengthOfLongestSubstring("aaefaskd")
