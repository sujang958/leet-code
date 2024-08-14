import { readFileSync } from "fs"

const input = readFileSync("/dev/stdin").toString().split("\n")

// const platforms = Number(input.shift())

const platforms = input
  .map((v) => v.split(" ").map(Number))
  .map((v) => [v[0], v[1], v[2]] as const)

let pillarLength = 0

for (const [altitude, x1, x2] of platforms) {
  // Left Pillar (x1)
  for (
    let descendedAltitude = altitude - 1;
    descendedAltitude < 0;
    descendedAltitude--
  ) {
    pillarLength += 1

    const platformBelow = platforms.find(([alt]) => alt == descendedAltitude)

    if (platformBelow && platformBelow[1] <= x1 && x1 <= platformBelow[2]) break
    // if (platformBelow && (platformBelow[1] <= x1 && platformBelow[2] >= x1))
    //   break
  }

  // // Right Pillar (x2)
  for (
    let descendedAltitude = altitude - 1;
    descendedAltitude < 0;
    descendedAltitude--
  ) {
    pillarLength += 1

    const platformBelow = platforms.find(([alt]) => alt == descendedAltitude)

    if (platformBelow && platformBelow[1] <= x2 && x2 <= platformBelow[2]) break
    // if (platformBelow && (platformBelow[1] <= x1 && platformBelow[2] >= x1))
    //   break
  }
}

console.log(pillarLength)

// TIMEOUT :(