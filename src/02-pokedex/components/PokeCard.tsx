import style from './PokeCard.module.css'
import { PokeCardDetail } from './PokeCardDetail'
import { PokeCardSummary } from './PokeCardSummary'

export const PokeCard = () => {
  return (
    <div className={style.wrap}>
      <details>
        <summary>
          <PokeCardSummary pokedex={25} name="PIKACHU" />
        </summary>
        <div>
          <PokeCardDetail pokedex={25} />
        </div>
      </details>
    </div>
  )
}
