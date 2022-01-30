import { KEYS } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        var arabic = /[\u0600-\u06FF]/;
        if (key.length === 1 && arabic.test(key)) {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  function getRow(idx: number) {
    let start = idx * 12;
    let end = (idx > 1? 32 : (idx + 1)*12);

    return KEYS.slice(start, end).map((key) => {
      return (
        <Key value={key} onClick={onClick} status={charStatuses[key]} />
      )
    })
  }

  return (
    <div>
      <div className="flex justify-center mb-1">
        {getRow(0)}
      </div>
      <div className="flex justify-center mb-1">
        {getRow(1)}
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="DELETE" onClick={onClick} status='DELETE'>
          {DELETE_TEXT}
        </Key>
        {getRow(2)}
        <Key width={65.4} value="ENTER" onClick={onClick} status='ENTER'>
        {ENTER_TEXT}
        </Key>
      </div>
    </div>
  )
}
