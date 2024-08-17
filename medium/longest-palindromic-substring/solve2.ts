const toReversed = (s: any[]) => {
  const copied = [...s]

  copied.reverse()

  return copied
}

function longestPalindrome(s: string): string {
  if (s.length <= 1) return s
  if (s.length == 2 && s[0] !== s[1]) return s[0]

  let answer = ""

  for (let i = 1; i < s.length; i++) {
    const middle = s[i]

    for (let j = i - 1; j >= 0; j--) {
      const before = s.slice(j, i)
      const after = s.slice(i + 1, before.length + i + 1)

      const joined = `${before}${middle}${after}`
      const joinedWithBefore = `${before}${middle}`
      const joinedWithAfter = `${middle}${after}`

      const candidates = [joined, joinedWithAfter, joinedWithBefore]

      // console.log(candidates)

      const found = [
        ...candidates.filter((candidate) => {
          if (candidate.length <= 1) return true
          if (candidate.length % 2 == 0)
            return (
              candidate.slice(0, candidate.length / 2) ==
              toReversed(candidate.slice(candidate.length / 2).split("")).join(
                ""
              )
            )
          else return before === toReversed(after.split("")).join("")
        }),
        "",
      ].reduce((a, b) => (a.length > b.length ? a : b))

      if (found.length > answer.length) answer = found
    }

    // const before = s.slice(0, i)
    // const after = s.slice(i + 1, before.length + i + 1)

    // // console.log(before, after, i)

    // const joined = `${before}${middle}${after}`
    // const joinedWithBefore = `${before}${middle}`
    // const joinedWithAfter = `${middle}${after}`

    // const candidates = [joined, joinedWithAfter, joinedWithBefore]

    // console.log(candidates)

    // const found = [
    //   ...candidates.filter((candidate) => {
    //     if (candidate.length % 2 == 0)
    //       return (
    //         candidate.slice(0, candidate.length / 2) ==
    //         toReversed(candidate.slice(candidate.length / 2).split("")).join("")
    //       )
    //     else return before === toReversed(after.split("")).join("")
    //   }),
    //   "",
    // ].reduce((a, b) => (a.length > b.length ? a : b))

    // console.log(found)

    // if (found.length > answer.length) answer = found
  }

  return answer
}

// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("cbbd"))
console.log(
  longestPalindrome(
    "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
  )
)

// cbbd
