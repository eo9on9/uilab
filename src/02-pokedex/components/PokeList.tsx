import { useState } from 'react'
import { pokemonsApi } from '../api/helper'
import { InfiniteScrollDetector } from './InfiniteScrollDetector'
import { PokeCard } from './PokeCard'
import style from './PokeList.module.css'

const STEP = 20

export const PokeList = () => {
  const [count, setCount] = useState(0)
  const [isFetching, setIsFetching] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pokemons, setPokemons] = useState<any[]>([])

  const fetch = async () => {
    try {
      setIsFetching(true)

      const data = await pokemonsApi.get(`/pokemon?offset=${STEP * count}&limit=20`)

      setCount(count + 1)
      setPokemons([...pokemons, ...(data?.data.results || [])])
    } catch (e) {
      console.error(e)
    } finally {
      setIsFetching(false)
    }
  }

  const scrollDetectHandler = () => {
    fetch()
  }

  return (
    <div>
      <ul className={style.list}>
        {pokemons.map((pokemon, index) => (
          <PokeCard key={pokemon.name} id={index} name={pokemon.name} />
        ))}
      </ul>
      <InfiniteScrollDetector isDetect={!isFetching} onDetect={scrollDetectHandler} />
    </div>
  )
}
