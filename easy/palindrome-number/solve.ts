function isPalindrome(x: number): boolean {
  const palindromeNumber = x.toString().split("")
  palindromeNumber.reverse()

  return x == Number(palindromeNumber.join(""))
}

console.log(isPalindrome(123))