const checkFrequency = (word: string) => {
  const frequency: Record<string, number> = {}

  word.split("").map(char => {
    frequency[char] ??= 0
    frequency[char] += 1
  })

  if (Object.entries(Object.fromEntries(Object.entries(frequency).map(([_, v]) => ([v, 1])))).length >= 2) return false
  else return true
}

function equalFrequency(word: string): boolean {
  const listedWord = word.split("")
  
  let answer = ""

  for (const i in listedWord) { // to avoid the type error
    answer = listedWord.filter((_, j) => j != Number(i)).join("")

    if (checkFrequency(answer)) 
      return true
  }  
  
  return false
};

console.log(equalFrequency("aazz"))