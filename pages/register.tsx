// Lib
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useAuth } from 'lib/hook/useAuth'
import Link from 'next/link'

// Components
import AuthLayoutSection from 'components/section/auth/AuthLayoutSection'
import Notify from 'components/reusable/global/Notify'

// Interface
import ResponseInterface from 'lib/interface/ResponseInterface'

const Register: NextPage = () => {

  const { register } = useAuth()

  const [user, setUser] = useState({
    email: '',
    name: '',
    password: ''
  })

  const [response, setResponse] = useState<ResponseInterface>({
    status: 0,
    message: '',
    data: []
  })

  const [isSubmit, setIsSubmit] = useState(false)
  
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

    const res = await register(user)
    setResponse(res)

    setIsSubmit(false)
  }

  return (
    <>

      <Head>
        <title>Register</title>
      </Head>

      <AuthLayoutSection>

        <Notify response={response} close={setResponse} />

        <h1 className='selection:bg-white selection:text-black text-xl text-center mb-16 hover:text-white font-bold text-white/30'>
          Fill In All Blank Input <br />To See The Register Button
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
              className='input-tw peer'
              type='text'
              name='name'
              placeholder='Name'
              onChange={handleChange}
              required
              autoComplete='off'
              value={user.name}
            />

            <input
              className='input-tw peer'
              type='password'
              name='password'
              placeholder='Password'
              required
              onChange={handleChange}
              value={user.password}
            />

            <button disabled={isSubmit} className={`disabled:bg-green-600 disabled:text-white peer-invalid:hidden bg-white text-black text-sm font-bold py-2 px-4 w-full`}>
              {isSubmit ? '>_<' : 'Register New Account'}
            </button>

          </div>
        </form>

        <Link href='/login' className='mt-16 select-none text-blue-600 hover:underline'>
          I Have It, Just Login
        </Link>

      </AuthLayoutSection>

    </>
  )
}

export default Register
