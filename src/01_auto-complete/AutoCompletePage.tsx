'use client'

import * as Popover from '@radix-ui/react-popover'
import { ChangeEventHandler, useMemo, useRef, useState } from 'react'
import { debounce } from './debounce'
import { getSuggestions } from './getSuggestions'

export const AutoCompletePage = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isOpen, setIsOpen] = useState(false)

  const [keyword, setKeyword] = useState('')

  const [options, setOptions] = useState<string[]>([])

  const [isLoading, setIsLoading] = useState(false)

  const search = async (keyword: string) => {
    console.log('=== search')

    if (keyword === '') return setOptions([])

    setIsLoading(true)

    const [_, suggestions] = await getSuggestions(keyword)

    setIsLoading(false)

    setOptions(suggestions)
  }

  const debouncedSearch = useMemo(() => debounce(search, 300), [])

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    console.log('=== change')

    const { value } = e.target

    setKeyword(value)

    setIsOpen(true)

    debouncedSearch(value)
  }

  const chooseOption = (o: string) => {
    setKeyword(o)
    setIsOpen(false)

    inputRef.current?.focus()
  }

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          style={{
            width: '100%',
          }}
          value={keyword}
          onChange={handleChange}
        />
        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
          <Popover.Trigger asChild>
            <div />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content onOpenAutoFocus={e => e.preventDefault()}>
              {isLoading ? (
                'Loading...'
              ) : (
                <ul style={{ border: '1px solid skyblue' }}>
                  {options.map(o => (
                    <li key={o} onClick={() => chooseOption(o)}>
                      {o}
                    </li>
                  ))}
                </ul>
              )}
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  )
}
