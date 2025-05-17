'use client'

import { useState } from 'react'
import { getSuggestions } from './getSuggestions'

export const AutoCompletePage = () => {
  const [keyword, setKeyword] = useState('')

  const [options, setOptions] = useState<string[]>([])

  const handleClick = async () => {
    const [_, suggestions] = await getSuggestions(keyword)

    setOptions(suggestions)
  }

  return (
    <div>
      <input value={keyword} onChange={e => setKeyword(e.target.value)} />
      <button onClick={handleClick}>suggestion</button>
      <ul>
        {options.map(o => (
          <li key={o} onClick={() => setKeyword(o)}>
            {o}
          </li>
        ))}
      </ul>
    </div>
  )
}
