import { TRIALS_NUM } from '../../constants/nums'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  guesses: string[]
  currentGuess: string
}

export const Grid = ({ guesses, currentGuess }: Props) => {
  const empties =
    guesses.length < TRIALS_NUM - 1 ? Array.from(Array(TRIALS_NUM - 1 - guesses.length)) : []

  return (
    <div className={`pb-${TRIALS_NUM}`}>
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} />
      ))}
      {guesses.length < TRIALS_NUM && <CurrentRow guess={currentGuess} />}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}
