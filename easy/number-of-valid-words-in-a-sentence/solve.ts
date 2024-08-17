const puntuations = ["!", ".", ","]

function countValidWords(sentence: string): number {
  const words = sentence
    .split(" ")
    .filter((v) => v.replace(/ /gi, "").length > 0) // remove spaces
    .filter((v) => v.replace(/[0-9]/g, "").length == v.length) // remove words that contain any digits
    .filter((word) => word.toLowerCase() == word) // only lowercases
    .filter((_word) => {
      const word = _word.replace(/[!|.|,]/g, "")
      
      return word.at(0) != "-" && word.at(-1) != "-"
    }) // incorrect hypens
    .filter((word) => (word.match(/-/gi)?.length ?? 0) <= 1) // only one hypen
    .filter((word) => {
      if (word.length == 1) return true
      else if (puntuations.includes(word.at(0) ?? "")) return false

      const indexes = [
        word.indexOf("!"),
        word.indexOf("."),
        word.indexOf(","),
      ].filter((v) => v != -1 && v != word.length - 1)

      if (indexes.length >= 1) return false
      else return true
    })

  // console.log(words)

  return words.length
}