// Lib
import Link from 'next/link'
import Head from 'next/head'
import { NextPage } from 'next'
import { useState } from 'react'
import { useAuth } from 'lib/hook/useAuth'

// Components
import Notify from 'components/reusable/global/Notify'

// Interface
import ResponseInterface from 'lib/interface/ResponseInterface'

const Login: NextPage = () => {

  const { login } = useAuth()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [isSubmit, setIsSubmit] = useState(false)

  const [response, setResponse] = useState<ResponseInterface>({
    status: 0,
    message: '',
    data: []
  })

  const handleChange = (e: any) => {

    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })

  }

  const handleSubmit = async (e: any) => {

    e.preventDefault()
    setIsSubmit(true)

    const res = await login(user)
    setResponse(res)

    setIsSubmit(false)
  }

  return (
    <>

      <Head>
        <title>Login</title>
      </Head>

      <section className='flex flex-col items-center justify-center min-h-screen bg-black'>

        <Notify response={response} close={setResponse} />

        <h1 className='text-xl text-center mb-16 hover:text-white font-bold text-white/30'>
          Fill in a valid email address <br />to see the login button
        </h1>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col space-y-2 items-center justify-center'>

            <input
              className='p-2 peer valid:border-green-600 invalid:border-red-600 focus:border-white outline-none border border-white/40 bg-black text-white'
              type='email'
              name='email'
              placeholder='Email address'
              onChange={handleChange}
              required
              autoComplete='off'
              value={user.email}
            />

            <input
              className='p-2 focus:border-white outline-none border border-white/40 bg-black text-white'
              type='password'
              name='password'
              placeholder='Password'
              required
              onChange={handleChange}
              value={user.password}
            />

            <button disabled={isSubmit} className={`disabled:bg-green-600 disabled:text-white peer-invalid:bg-transparent bg-white text-black text-sm font-bold py-2 px-4 w-full`}>
              {isSubmit ? '>_<' : 'Login Now'}
            </button>

          </div>
        </form>

        <Link href='/register' className='mt-16 text-blue-600 hover:underline'>
          Create new
        </Link>

      </section>

    </>
  )
}

export default Login
