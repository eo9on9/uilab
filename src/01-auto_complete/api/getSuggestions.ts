export type GetSuggestionsResponse = [
  keyword: string,
  suggestions: string[],
  descriptions: string[],
  links: string[],
]

export const getSuggestions = async (keyword: string): Promise<GetSuggestionsResponse> => {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${keyword}`,
  )

  if (!response.ok) {
    throw new Error(`${response.status}`)
  }

  return await response.json()
}
