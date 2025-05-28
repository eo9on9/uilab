import style from './PokeCard.module.css'
import { PokeCardDetail } from './PokeCardDetail'
import { PokeCardSummary } from './PokeCardSummary'

interface PokeCardProps {
  id: number
  name: string
}

export const PokeCard = ({ id, name }: PokeCardProps) => {
  const pokenum = id + 1

  return (
    <div className={style.wrap}>
      <details>
        <summary>
          <PokeCardSummary pokenum={pokenum} name={name} />
        </summary>
        <div>
          <PokeCardDetail pokenum={pokenum} />
        </div>
      </details>
    </div>
  )
}
