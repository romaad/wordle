import { WORDS_AR } from "../constants/wordlist_AR"
import { VALIDGUESSES_AR } from "../constants/validGuesses_AR"
import { WORD_WIDTH } from "../constants/nums"


export const isWordInWordList = (word: string) => {
  return (
    WORDS_AR.includes(word.toLowerCase()) ||
    VALIDGUESSES_AR.includes(word.toLowerCase())
  )
}

const alef = ['ا', 'أ', 'إ', 'آ']
export const isWinningWord = (word: string) => {
  for(let i = 0; i < WORD_WIDTH; i++) {
    if(solution[i] === word[i]) {
      continue;
    }
    if(solution[i] in alef && word[i] in alef) {
      continue;
    }
    return false;
  }
  return true
}

export const getWordOfDay = () => {
  // January 27, 2022 Game Epoch
  const epochMs = new Date('January 27, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  return {
    solution: WORDS_AR[index % WORDS_AR.length].toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
