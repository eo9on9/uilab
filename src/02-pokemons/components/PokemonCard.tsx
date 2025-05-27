import { Accordion } from './Accordion'
import style from './PokemonCard.module.css'
import { PokemonCardDetail } from './PokemonCardDetail'
import { PokemonCardSummary } from './PokemonCardSummary'

export const PokemonCard = () => {
  return (
    <div className={style.card}>
      <Accordion>
        <PokemonCardSummary />
        <PokemonCardDetail />
      </Accordion>
    </div>
  )
}
