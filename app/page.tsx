import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/01-auto_complete">01 Auto Complete</Link>
        </li>
        <li>
          <Link href="/02-pokedex">02 Pokedex</Link>
        </li>
      </ul>
    </div>
  )
}
