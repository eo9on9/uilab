import style from './PokemonCardSummary.module.css'

export interface PokemonCardSummaryProps {
  pokedex: number
  name: string
}

export const PokemonCardSummary = ({ pokedex, name }: PokemonCardSummaryProps) => {
  const paddedPokedex = `#${pokedex.toString().padStart(4, '0')}`

  return (
    <div className={style.wrap}>
      <div className={style.pokedex}>{paddedPokedex}</div>
      <div className={style.name}>{name}</div>
    </div>
  )
}
