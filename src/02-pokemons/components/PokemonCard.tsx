import style from './PokemonCard.module.css'
import { PokemonCardDetail } from './PokemonCardDetail'
import { PokemonCardSummary } from './PokemonCardSummary'

export const PokemonCard = () => {
  return (
    <div className={style.wrap}>
      <details>
        <summary>
          <PokemonCardSummary pokedex={25} name="PIKACHU" />
        </summary>
        <div>
          <PokemonCardDetail pokedex={25} />
        </div>
      </details>
    </div>
  )
}
