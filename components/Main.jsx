import { useRouter } from 'next/router'
// Framer Motion
import { motion } from 'framer-motion'
// TypeWriter
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Main = () => {
    const [text] = useTypewriter({
        words: [
            'Is in the house!!!',
            'Fullstack Intern',
            'UCSC Student',
            'Table Tennis Enthusiast',
        ],
        delaySpeed: 2000,
        loop: true,
    })
    const router = useRouter()
    return (
        <section id='main' className='flex min-h-[calc(100vh-72px)] flex-col items-center justify-center space-y-10'>
            <motion.div
                initial={{ scale: 0, rotate: 45, opacity: 1 }}
                animate={{ scale: 2, rotate: 45, opacity: [0.6, 0] }}
                transition={{
                    duration: 0.75,
                    repeatDelay: 3,
                }}
                className='absolute -z-10 h-60 w-60 border-2 border-green-900 2xl:h-80 2xl:w-80'
            ></motion.div>
            <motion.div
                initial={{ scale: 0, rotate: 45, opacity: 1 }}
                animate={{ scale: 2, rotate: 45, opacity: [0.6, 0] }}
                transition={{
                    duration: 1,
                    repeatDelay: 2.75,
                    repeat: Infinity,
                }}
                className='absolute -z-10 h-40 w-40 border-2 border-green-900 2xl:h-60 2xl:w-60'
            ></motion.div>
            <motion.div
                initial={{ scale: 0, rotate: 45, opacity: 1 }}
                animate={{ scale: 2, rotate: 45, opacity: [0.6, 0] }}
                transition={{
                    duration: 1.25,
                    repeatDelay: 2.5,
                }}
                className='absolute z-0 h-20 w-20 border-2 border-green-900 2xl:h-40 2xl:w-40'
            ></motion.div>
            <h1
                className='text-5xl tracking-widest text-green-900 underline decoration-underline xs:text-7xl lg:text-8xl 2xl:text-9xl
            '
            >
                Simon Zhao
            </h1>
            <h3 className='text-md flex items-center uppercase tracking-widest text-green-900 sm:text-xl 2xl:text-3xl'>
                {text}
                <Cursor />
            </h3>
            <div className='flex space-x-2 xs:space-x-4 lg:space-x-8'>
                <button
                    onClick={() => router.push('/#about')}
                    className='navBtn'
                >
                    About
                </button>
                <button
                    onClick={() => router.push('/#experience')}
                    className='navBtn'
                >
                    Experience
                </button>
                <button
                    onClick={() => router.push('/#project')}
                    className='navBtn'
                >
                    Projects
                </button>
                <button
                    onClick={() => router.push('/#skills')}
                    className='navBtn'
                >
                    Skills
                </button>
            </div>
        </section>
    )
}

export default Main
