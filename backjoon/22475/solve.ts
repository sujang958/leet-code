import { readFileSync } from "fs"

const input =
  `.tweets.1
name: shimeji
id: shimejitan
tweets:
  1: shimejilove
  2: azupero`.split("\n") ?? readFileSync("/dev/stdin").toString().split("\n")

const targetProperty = input.shift()

const parsed: Record<string, any> = {}

for (const line of inp)
