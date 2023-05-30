function isValid(s: string): boolean {
  let str = s

  for (const i of Array.from({ length: s.length * 3 })) {
    str = str.replace(/{}/gi, "").replace(/\[\]/gi, "").replace(/\(\)/gi, "")
  }
  return str.length < 1
}
