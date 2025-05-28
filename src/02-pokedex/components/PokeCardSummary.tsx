import style from './PokeCardSummary.module.css'

export interface PokeCardSummaryProps {
  pokedex: number
  name: string
}

export const PokeCardSummary = ({ pokedex, name }: PokeCardSummaryProps) => {
  const paddedPokedex = `#${pokedex.toString().padStart(4, '0')}`

  return (
    <div className={style.wrap}>
      <div className={style.pokedex}>{paddedPokedex}</div>
      <div className={style.name}>{name}</div>
    </div>
  )
}
