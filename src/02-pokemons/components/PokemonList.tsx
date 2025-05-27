import { PokemonCard } from './PokemonCard'
import style from './PokemonList.module.css'

export const PokemonList = () => {
  return (
    <ul className={style.list}>
      <li>
        <PokemonCard />
      </li>
      <li>
        <PokemonCard />
      </li>
      <li>
        <PokemonCard />
      </li>
    </ul>
  )
}
