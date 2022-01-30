import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'

type Props = {
  guess: string
}

export const CompletedRow = ({ guess }: Props) => {
  const statuses = getGuessStatuses(guess).reverse()

  return (
    <div className="flex justify-center mb-1">
      {guess.split('').reverse().map((letter, i) => (
        <Cell key={i} value={letter} status={statuses[i]} />
      ))}
    </div>
  )
}
