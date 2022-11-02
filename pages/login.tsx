// Lib
import Link from 'next/link'
import Head from 'next/head'
import { NextPage } from 'next'
import { useState } from 'react'
import { useAuth } from 'lib/hook/useAuth'

// Components
import Notify from 'components/reusable/global/Notify'
import AuthLayoutSection from 'components/section/auth/AuthLayoutSection'

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

      <AuthLayoutSection>

        <Notify response={response} close={setResponse} />

        <h1 className='selection:bg-white selection:text-black text-xl text-center mb-16 hover:text-white font-bold text-white/30'>
          Fill In A Valid Email Address <br />To See The Login Button
        </h1>

        <form onSubmit={handleSubmit}>
          <div className='select-none flex flex-col space-y-2 items-center justify-center'>

            <input
              className='input-tw peer'
              type='email'
              name='email'
              placeholder='Email address'
              onChange={handleChange}
              required
              autoComplete='off'
              value={user.email}
            />

            <input
              className='input-tw'
              type='password'
              name='password'
              placeholder='Password'
              required
              onChange={handleChange}
              value={user.password}
            />

            <button disabled={isSubmit} className={`disabled:bg-green-600 disabled:text-white visible peer-invalid:invisible bg-white text-black text-sm font-bold py-2 px-4 w-full`}>
              {isSubmit ? '>_<' : 'Login Now'}
            </button>

          </div>
        </form>

        <Link href='/register' className='select-none mt-16 text-blue-600 hover:underline'>
          Create New?
        </Link>

      </AuthLayoutSection>

    </>
  )
}

export default Login
