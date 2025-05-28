'use client'

import { PokeList } from '../components/PokeList'
import style from './PokedexPage.module.css'

export const PokedexPage = () => {
  return (
    <div className={style.page}>
      <h1>Pokédex</h1>
      <PokeList />
    </div>
  )
}
