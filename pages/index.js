import Head from 'next/head'
// Components
import Header from '../components/Header'
import Main from '../components/Main'
import About from '../components/About'
import Experience from '../components/Experience'

export default function Home() {
    return (
        <main
            className={`absolute h-screen w-full overflow-x-hidden overflow-y-scroll`}
        >
            <Head>
                <title>Simon&apos;s Portfolio</title>
            </Head>
            <Header />
            <Main />
            <br />
            <br />
            <About />
            <br />
            <br />
            <Experience />
            <br />
            <br />
        </main>
    )
}
