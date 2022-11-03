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

export const getTableInfo = async (id: string | string[], token: string) => {

  const url = BASE_API_URL + '/table/values'
  const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      table_id: id
    })
  })

  const res = await req.json()

  return RESPONSE({
    status: req.status,
    message: res.message ?? req.statusText,
    data: res.data ?? []
  })

}

export const getTableAuthors = async (id: string | string[], token: string) => {

  const url = BASE_API_URL + '/table/authors'
  const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      table_id: id
    })
  })

  const res = await req.json()

  return RESPONSE({
    status: req.status,
    message: res.message ?? req.statusText,
    data: res.data ?? []
  })
}
