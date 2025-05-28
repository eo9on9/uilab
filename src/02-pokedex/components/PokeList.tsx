import { PokeCard } from './PokeCard'
import style from './PokeList.module.css'

export const PokeList = () => {
  return (
    <ul className={style.list}>
      <li>
        <PokeCard />
      </li>
      <li>
        <PokeCard />
      </li>
      <li>
        <PokeCard />
      </li>
    </ul>
  )
}
