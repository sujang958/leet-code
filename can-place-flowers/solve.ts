function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let availablePlaces = 0

  // 1, 0, 0, 0, 1
  // 0, 0, 0, 0, 0, 0, 0
  // 0, 0, 1, 0, 0, 0, 1
  // 0, 0, 0, 0, 0

  if (n == 0) return true
  if (flowerbed.length == 1 && flowerbed[0] == 0 && n == 1) return true

  for (let i = 0; i < flowerbed.length; i++) {
    if (i == 0 && flowerbed[0] == 0 && flowerbed[1] == 0) // if this is a start loop
      availablePlaces += ++flowerbed[i]
    else if (
      i == flowerbed.length - 1 && // if this is a last loop
      flowerbed.at(-1) == 0 &&
      flowerbed.at(-2) == 0
    )
      availablePlaces += ++flowerbed[i]
    else if (
      flowerbed[i] == 0 &&
      flowerbed[i - 1] == 0 &&
      flowerbed[i + 1] == 0
    ) {
      availablePlaces += ++flowerbed[i]
    }
  }

  // console.log(flowerbed)

  return availablePlaces >= n
}
