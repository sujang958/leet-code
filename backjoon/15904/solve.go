package main

import (
	"fmt"
	"regexp"
	"strings"
)

func main() {
	input := ""

	fmt.Scanln(&input)

	reg := regexp.MustCompile("[a-z]")
	shortened := (strings.ReplaceAll(reg.ReplaceAllString(input, ""), " ", ""))


	if (shortened == "UCPC") {
		fmt.Println("I love UCPC")
	} else {
		fmt.Println("I hate UCPC")
	}
}