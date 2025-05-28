'use client'

import { useEffect } from 'react'
import { pokemonsApi } from '../api/helper'

import { PokeList } from '../components/PokeList'
import style from './PokedexPage.module.css'

export const PokedexPage = () => {
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
      <h1>Pokédex</h1>
      <PokeList />
    </div>
  )
}
