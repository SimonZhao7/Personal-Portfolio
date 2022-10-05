import Image from 'next/image'
// Framer Motion
import { motion } from 'framer-motion'
// Assets
import portrait from '../assets/portrait.jpg'

const About = () => {
    return (
        <section
            id='about'
            className='mx-auto min-h-screen flex items-center justify-center overflow-y-scroll p-5 !pt-[72px] xs:p-10'
        >
            <div className='w-full max-w-6xl space-y-4 rounded-lg md:flex-row md:items-center md:space-x-8 xl:space-x-12 flex flex-col justify-center'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.75 }}
                    viewport={{ once: true }}
                    className='relative -z-20 w-28 rounded-lg border border-green-900 p-[4px] xs:w-48 xs:p-2 md:w-56 xl:w-72 2xl:w-96'
                >
                    <Image
                        src={portrait}
                        layout='responsive'
                        objectFit='cover'
                        className='rounded-lg '
                        alt='portrait'
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.75, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='md:flex-1 space-y-4 xl:space-y-8'
                >
                    <h1 className='text-2xl uppercase tracking-widest text-green-900 underline decoration-underline xs:text-3xl md:text-5xl xl:text-6xl xl:tracking-[15px] 2xl:text-7xl'>
                        About
                    </h1>
                    <article className='space-y-4 text-sm xs:text-base md:text-lg xl:space-y-8 xl:text-xl 2xl:text-2xl'>
                        <p>
                            I am a first year Computer Science student at UCSC.
                            I have been programming for 2 years now and I have
                            held a few internship positions at startups. Most of
                            my work was related to web development and RESTful
                            API design.
                        </p>
                        <p>
                            I enjoy working in teams and some of my favorite
                            experiences of programming were from hackathons. My
                            team and I, a group of 4, once designed and deployed
                            a personal spending data aggregation web
                            application, which won 2nd place out of 415
                            participants.
                        </p>
                        <p>
                            I am now looking for an internship opportunity next
                            summer (2023) to gain more in-person exposure in
                            technology and the industry. I also want to use that
                            opportunity to grow technically and personally so I
                            could succeed in my future endeavors.
                        </p>
                    </article>
                </motion.div>
            </div>
        </section>
    )
}

export default About
