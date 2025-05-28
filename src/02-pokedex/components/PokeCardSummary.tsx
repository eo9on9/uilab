import style from './PokeCardSummary.module.css'

export interface PokeCardSummaryProps {
  pokenum: number
  name: string
}

export const PokeCardSummary = ({ pokenum, name }: PokeCardSummaryProps) => {
  const index = `#${pokenum.toString().padStart(4, '0')}`

  return (
    <div className={style.wrap}>
      <div className={style.pokedex}>{index}</div>
      <div className={style.name}>{name}</div>
    </div>
  )
}
