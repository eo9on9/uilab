import axios, { AxiosRequestConfig, Method } from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2'

const pokemonsApiInstance = axios.create({ baseURL: BASE_URL })

const request =
  (method: Method) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <T = any>(url: string, config?: AxiosRequestConfig<any>) =>
    pokemonsApiInstance<T>(url, {
      method,
      ...config,
    })

export const pokemonsApi = {
  get: request('GET'),
  post: request('POST'),
}
