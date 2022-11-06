// Lib
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import LayoutWrapperSection from 'components/section/global/LayoutWrapperSection'

// Interface
import LayoutWrapperInterface from 'lib/interface/LayoutWrapperInterface'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { access_token, user, tables } = ctx.req.cookies

  return {
    props: {
      wrapperData: {
        user: JSON.parse(user!),
        access_token,
        data: JSON.parse(tables!)
      }
    }
  }

}

type Props = {
  wrapperData: LayoutWrapperInterface
}

const Home: NextPage<Props> = ({ wrapperData }) => {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Dashwire</title>
      </Head>

      <LayoutWrapperSection {...wrapperData}>
        <div className='space-y-8'>

          <section>

            <h1 className='text-xl font-bold'>Who You&apos;re</h1>
            <p className='text-sm text-white/70'>
              Information of your account &rarr;
            </p>

            <div className='mt-2 pl-4 border-l-2 border-white/70 border-dashed'>
              <h1 className='text-lg font-bold'>
                {wrapperData.user.name}
              </h1>
              <p className='text-sm text-white/70'>
                {wrapperData.user.email}
              </p>
            </div>

          </section>

          <section>

            <h1 className='text-xl font-bold'>Permission</h1>
            <p className='text-sm text-white/70'>
              To manage the following table &rarr;
            </p>

            <div className='mt-2 pl-4 border-l-2 border-white/70 border-dashed flex flex-col space-y-2'>
              {wrapperData.data.tables ? (
                wrapperData.data.tables.map(({ table, id }) => (
                  <a key={id} onClick={() => router.push(`/dashboard/${id}`)} className='text-sky-400 hover:underline text-lg font-bold'>
                    {table}
                  </a>
                ))
              ) : (
                <h1 className='text-lg font-bold'>
                  You Don&apos;t Have Permission To Manage Any Table
                </h1>
              )}
            </div>

          </section>

        </div>
      </LayoutWrapperSection>

    </>
  )

}

export default Home
