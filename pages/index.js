import Head from 'next/head'
// Components
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
    return (
        <main
            className={`z-99 absolute h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll`}
        >
            <Head>
                <title>Simon's Portfolio</title>
            </Head>
            <Header />
            <section className='snap-center snap-always'>
                <Main />
            </section>
        </main>
    )
}
