import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { WORDLE_TITLE } from '../constants/strings'
import { TRIALS_NUM } from '../constants/nums'

export const shareStatus = (guesses: string[], lost: boolean) => {
  navigator.clipboard.writeText(
    `${WORDLE_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/${TRIALS_NUM}\n\n` +
      generateEmojiGrid(guesses)
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
