import Head from 'next/head'
// Components
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simon's Portfolio</title>
      </Head>
      <Header />
      <Main />
    </div>
  )
}
