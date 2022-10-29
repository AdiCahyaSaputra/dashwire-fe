import { GetServerSideProps, NextPage } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { token } = ctx.req.cookies

  return {
    props: {
      token: token ?? null
    }
  }
}

type Props = {
  token: string | null
}

const setHandler = async () => {
  const req = await fetch('/api/cookie/set', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: 'token123'
    })
  })

  const res = await req.json()
  console.log(res)
}

const destroyHandler = async () => {
  const req = await fetch('/api/cookie/delete', {
    headers: {
      'Accept': 'application/json'
    },
  })

  const res = await req.json()
  console.log(res)
}

const Test: NextPage<Props> = ({ token }) => {
  return (
    <div>
      <h1>token : {token}</h1>
      <button onClick={setHandler}>set cookie</button>
      <button onClick={destroyHandler}>destroy cookie</button>
    </div>
  )
}

export default Test
