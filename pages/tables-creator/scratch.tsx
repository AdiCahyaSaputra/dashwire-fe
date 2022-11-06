// Lib
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

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
        data: JSON.parse(tables!),
      }
    }
  }

}

type Props = {
  wrapperData: LayoutWrapperInterface
}

const Scratch: NextPage<Props> = ({ wrapperData }) => {

  return (
    <>
      <Head>
        <title>Tables Creator</title>
      </Head>

      <LayoutWrapperSection {...wrapperData}>
        <h1>Hello</h1>
      </LayoutWrapperSection>
    </>
  )
}

export default Scratch
