package main

import (
	"strings"
)


func longestPalindrome(s string) string {
  if len(s) <= 1 {
		return s
	}

	longest := ""

	for i := 0; i < len(s); i++ {
		letters := string(rune(s[i]))

		if (len(longest) < 1) {
			longest += letters
		}

		for _, v := range s[i+1:] {
      letters += string(v)

      if (
        letters == strings.Join(reverse((strings.Split(letters, ""))), "") &&
        len(letters) > len(longest)) {
        longest = letters
			}
    }
	}

	return longest
}

func reverse(input []string) []string {
    if len(input) == 0 {
        return input
    }
    return append(reverse(input[1:]), input[0]) 
	}