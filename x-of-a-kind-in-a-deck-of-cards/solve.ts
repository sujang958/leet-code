function hasGroupsSizeX(deck: number[]): boolean {
  if (deck.length <= 1) return false

  const map: Record<number, number> = {}

  deck.forEach((card) => {
    map[card] ??= 0
    map[card] += 1
  })

  const counts = Object.entries(map).map(([_, v]) => v)

  if (counts.includes(1)) return false
  if (counts.some((v) => v % 2 != 0)) return false

  return true
}
