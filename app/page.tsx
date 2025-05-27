import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/01-auto_complete">01 Auto Complete</Link>
        </li>
        <li>
          <Link href="/02-pokemons">02 Pokemons</Link>
        </li>
      </ul>
    </div>
  )
}
