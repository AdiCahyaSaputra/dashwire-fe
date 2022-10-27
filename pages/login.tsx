import { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'

const Login: NextPage = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (name: any, value: any) => {
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setIsSubmit(true)
  }

  return (
    <>
      <section className='flex flex-col items-center justify-center min-h-screen bg-black'>

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
              onChange={(e) => handleChange('email', e.target.value)}
              required
              autoComplete='off'
            />

            <input
              className='p-2 focus:border-white outline-none border border-white/40 bg-black text-white'
              type='password'
              name='password'
              placeholder='Password'
              required
              onChange={(e) => handleChange('password', e.target.value)}
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
