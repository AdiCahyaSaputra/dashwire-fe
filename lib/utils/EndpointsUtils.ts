import { BASE_API_URL, RESPONSE } from './ApiUtils'

// Tables
export const getTables = async (token: string) => {

  const url = BASE_API_URL + '/table'

  const req = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })

  const res = await req.json()

  return RESPONSE({
    status: req.status,
    message: res.message,
    data: res.data ?? []
  })

} 
