'use client'

import { useEffect } from 'react'
import { pokemonsApi } from '../api'

export const PokemonsPage = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await pokemonsApi.get('/pokemon?offset=0&limit=20')

        console.log('=======')
        console.log(data?.data)
      } catch (e) {
        console.error(e)
      }
    }

    fetch()
  }, [])

  return 'PokemonsPage'
}
