import { WORD_WIDTH } from '../../constants/nums'
import { Cell } from './Cell'

type Props = {
  guess: string
}

export const CurrentRow = ({ guess }: Props) => {
  const splitGuess = guess.split('').reverse()
  const emptyCells = Array.from(Array(WORD_WIDTH - splitGuess.length))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
    </div>
  )
}
