'use client'

import * as Popover from '@radix-ui/react-popover'
import { useRef, useState } from 'react'
import { getSuggestions } from './getSuggestions'

export const AutoCompletePage = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isOpen, setIsOpen] = useState(false)

  const [keyword, setKeyword] = useState('')

  const [options, setOptions] = useState<string[]>([])

  const handleClick = async () => {
    const [_, suggestions] = await getSuggestions(keyword)

    setIsOpen(true)

    setOptions(suggestions)
  }

  return (
    <div>
      <button onClick={handleClick}>suggestion</button>
      <div>
        <input
          ref={inputRef}
          style={{
            width: '100%',
          }}
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
          <Popover.Trigger asChild>
            <div />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content onOpenAutoFocus={e => e.preventDefault()}>
              <ul>
                {options.map(o => (
                  <li
                    key={o}
                    onClick={() => {
                      setKeyword(o)
                      setIsOpen(false)

                      inputRef.current?.focus()
                    }}
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  )
}
