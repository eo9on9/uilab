import Image from 'next/image'
import style from './PokeCardDetail.module.css'

export interface PokeCardDetailProps {
  pokedex: number
}

export const PokeCardDetail = ({ pokedex }: PokeCardDetailProps) => {
  return (
    <div className={style.wrap}>
      <div className={style.pic}>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="pickachu"
          width={80}
          height={80}
        />
      </div>
      <div className={style.info}>
        <dl>
          <dt>Types</dt>
          <dd>
            <span>Electric&nbsp;</span>
            <span>Electric</span>
          </dd>
        </dl>
        <dl>
          <dt>Height</dt>
          <dd>0.4m</dd>
        </dl>
        <dl>
          <dt>Weight</dt>
          <dd>6kg</dd>
        </dl>
      </div>
    </div>
  )
}
