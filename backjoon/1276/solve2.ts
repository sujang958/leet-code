import { readFileSync } from "fs"

const input =
  `2
2 7 10
2 1 4
1 3 8`.split("\n") ?? readFileSync("/dev/stdin").toString().split("\n")

input.shift()

const platforms = input
  .map((v) => v.split(" ").map(Number))
  .map((v) => [v[0], v[1], v[2]] as const)

let pillarLength = 0

for (const [altitude, x1, x2] of platforms) {
  // console.log(`------\n${altitude}`)

  // Left Pillar (x1)
  ;(() => {
    const platformBelow = platforms
      .filter(([alt, _x1, _x2]) => alt < altitude && _x1 <= x1 && x1 <= _x2)
      .sort(([alt1], [alt2]) => alt2 - alt1)[0] // fun fact: backjoon doesn't support toSorted, Fuck backjoon i despise it

    //  console.log("x1", platformBelow, altitude)

    if (!platformBelow) pillarLength += altitude
    else pillarLength += altitude - platformBelow[0]
  })()

  // Right Pillar (x2)
  ;(() => {
    const platformBelow = platforms
      .filter(([alt, _x1, _x2]) => alt < altitude && _x1 <= x2 && x2 <= _x2)
      .sort(([alt1], [alt2]) => alt2 - alt1)[0]

    console.log("x2", platformBelow, altitude)

    if (!platformBelow) pillarLength += altitude
    else pillarLength += altitude - platformBelow[0]
  })()
}

console.log(pillarLength)
