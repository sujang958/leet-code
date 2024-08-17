// // const toReversed = (s: any[]) => {
// //   const copied = [...s]

// //   copied.reverse()

// //   return copied
// // }

// // 반을 넘겼을때 나머지랑 바로 비교

// function longestPalindrome(s: string): string {
//   if (s.length <= 1) return s

//   let candidate = ""

//   for (let i = 0; i < s.length; i++) {
//     let letter = s[i]

//     if (letter.length > candidate.length) candidate = letter

//     const restString = s.slice(i + 1)
//     for (const j of restString) {
//       letter += j

//       if (
//         letter == toReversed(letter.split("")).join("") &&
//         letter.length > candidate.length
//       )
//         candidate = letter

//       // if (letter.length == Math.floor(restString.length / 2))
//       //   if (
//       //     letter ==
//       //       toReversed(
//       //         restString.slice(Math.floor(restString.length / 2) - 1).split("")
//       //       ).join("") &&
//       //     restString.length > candidate.length
//       //   ) {
//       //     candidate = restString
//       //     break
//       //   }
//     }
//   }

//   return candidate ?? ""
// }

// console.log(
//   longestPalindrome(
//     "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
//   )
// )
