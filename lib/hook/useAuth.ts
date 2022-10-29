// Lib
import { BASE_API_URL, RESPONSE } from 'lib/utils/ApiUtils'
import { useRouter } from 'next/router'

// Interface
import LoginDataInterface from 'lib/interface/LoginDataInterface'

export const useAuth = () => {

  const router = useRouter()

  const login = async (data: LoginDataInterface) => {

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
          token: res.access_token
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

  return {
    login
  }
}
