'use client'

import * as Popover from '@radix-ui/react-popover'
import { ChangeEventHandler, useMemo, useRef, useState } from 'react'
import styles from './AutoCompleteInput.module.css'
import { debounce } from './debounce'
import { getSuggestions } from './getSuggestions'
import { SuggestionPanel } from './SuggestionPanel'

export const AutoCompleteInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isOpen, setIsOpen] = useState(false)

  const [keyword, setKeyword] = useState('')

  const [options, setOptions] = useState<string[]>([])

  const [isLoading, setIsLoading] = useState(false)

  const search = async (keyword: string) => {
    if (keyword === '') {
      setOptions([])

      setIsOpen(false)

      return
    }

    setIsOpen(true)

    setIsLoading(true)

    const [_, suggestions] = await getSuggestions(keyword)

    setIsLoading(false)

    setOptions(suggestions)

    if (!suggestions.length) setIsOpen(false)
  }

  const debouncedSearch = useMemo(() => debounce(search, 200), [])

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target

    setKeyword(value)

    debouncedSearch(value)
  }

  const chooseOption = (o: string) => {
    setKeyword(o)
    setIsOpen(false)

    inputRef.current?.focus()
  }

  return (
    <div>
      <input className={styles.input} ref={inputRef} value={keyword} onChange={handleChange} />
      <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger asChild>
          <div />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className={styles.PopoverContent}
            sideOffset={4}
            onOpenAutoFocus={e => e.preventDefault()}
          >
            <SuggestionPanel>
              {isLoading ? (
                <SuggestionPanel.Loading />
              ) : (
                <SuggestionPanel.List items={options} onItemClick={chooseOption} />
              )}
            </SuggestionPanel>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}
