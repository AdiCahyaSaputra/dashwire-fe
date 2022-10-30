// Lib
import { BASE_API_URL, RESPONSE } from 'lib/utils/ApiUtils'
import { useRouter } from 'next/router'

// Interface
import UserInterface from 'lib/interface/UserInterface'

export const useAuth = () => {

  const router = useRouter()

  const login = async (data: UserInterface) => {

    const url = BASE_API_URL + '/auth/login'
    const req = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })

    if (req.status === 401) return RESPONSE({
      status: req.status,
      message: 'Credentials is not valid',
    })

    const res = await req.json()

    if (res.access_token) {
      const req = await fetch('/api/cookie/set', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: res.access_token,
          user: res.data.user
        })
      })

      if (req.ok) router.push('/dashboard')
    }


    return RESPONSE({
      status: req.status,
      message: res.message,
      data: res.data
    })

  }

  const register = async (data: UserInterface) => {

    const url = BASE_API_URL + '/auth/register'
    const req = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })

    const res = await req.json()

    return RESPONSE({
      status: req.status,
      message: res.message,
    })

  }

  const logout = async (token: string) => {

    const url = BASE_API_URL + '/auth/logout'
    const req = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    if (req.ok) {
      const destroy = await fetch('/api/cookie/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (destroy.ok) router.push('/login')
    }

    const res = await req.json()

    return RESPONSE({
      status: req.status,
      message: res.message
    })

  }

  return {
    login,
    register,
    logout
  }
}
