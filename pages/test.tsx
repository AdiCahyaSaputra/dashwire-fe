import { GetServerSideProps, NextPage } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { access_token } = ctx.req.cookies

  return {
    props: {
      access_token: access_token ?? null
    }
  }
}

type Props = {
  access_token: string | null
}

const setHandler = async () => {
  const req = await fetch('/api/cookie/set', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      access_token: 'token123'
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

const Test: NextPage<Props> = ({ access_token }) => {
  return (
    <div>
      <h1>access_token : {access_token}</h1>
      <button onClick={setHandler}>set cookie</button>
      <button onClick={destroyHandler}>destroy cookie</button>
    </div>
  )
}

export default Test
