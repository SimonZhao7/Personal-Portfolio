import Head from 'next/head'
// Components
import Header from '../components/Header'
import Main from '../components/Main'
import About from '../components/About'

export default function Home() {
    return (
        <main
            className={`z-99 absolute h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll`}
        >
            <Head>
                <title>Simon&apos;s Portfolio</title>
            </Head>
            <Header />
            <section id='main' className='snap-center snap-always'>
                <Main />
            </section>
            <section id='about' className='snap-center snap-always'>
              <About />
            </section>
            <section id='about' className='snap-center snap-always'>
              <About />
            </section>
        </main>
    )
}
