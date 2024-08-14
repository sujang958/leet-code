package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	G := 0

	fmt.Fscanln(reader, &G)

	numbers := make([]int, G)
	for i := range numbers {
		numbers[i] = i + 1
	}

	numbers = numbers[1:]
	reverseSlice(numbers)

	for _, currentWeight := range numbers {
		for _, pastWeight := range numbers {
			if (currentWeight == pastWeight) {
				continue
			}

			if currentWeight*currentWeight-pastWeight*pastWeight == G {
				fmt.Fprintln(writer, currentWeight)
			}
		}
	}
}

func reverseSlice(slice []int) {
	for i, j := 0, len(slice)-1; i < j; i, j = i+1, j-1 {
		slice[i], slice[j] = slice[j], slice[i]
	}
}

