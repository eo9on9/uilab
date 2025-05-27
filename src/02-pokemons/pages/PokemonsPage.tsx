'use client'

import { useEffect } from 'react'
import { pokemonsApi } from '../api/helper'

import { PokemonList } from '../components/PokemonList'
import style from './PokemonsPage.module.css'

export const PokemonsPage = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await pokemonsApi.get('/pokemon?offset=0&limit=20')

        console.log('=======')
        console.log(data?.data)
      } catch (e) {
        console.error(e)
      }
    }

    fetch()
  }, [])

  return (
    <div className={style.page}>
      <PokemonList />
    </div>
  )
}
