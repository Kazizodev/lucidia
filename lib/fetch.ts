interface ApiResponse {
  id: number
  name: string
}

const API_URL = process.env.API_URL

export const fetchData = async (endpoint: string, options?: RequestInit): Promise<ApiResponse> => {
  const url = `${API_URL}/${endpoint}`

  const response = await fetch(url, options)

  if (!response.ok) throw new Error(`Request failed with status ${response.status}`)

  const data: ApiResponse = await response.json()

  return data
}
