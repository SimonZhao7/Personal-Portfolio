import Image from 'next/image'
// Framer Motion
import { motion } from 'framer-motion'
// Assets
import portrait from '../assets/portrait.jpg'

const About = () => {
    return (
        <div className='flex h-screen items-center justify-center p-5 xs:p-10 !pt-[82px] overflow-y-scroll'>
            <div className='h-full w-full rounded-lg'>
                <div className='space-y-4'>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.75 }}
                        viewport={{ once: true }}
                        className='relative w-28 rounded-lg border border-green-900 p-[4px] xs:p-2 xs:w-48'
                    >
                        <Image
                            src={portrait}
                            layout='responsive'
                            objectFit='cover'
                            className='rounded-lg'
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.75, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='flex-1 space-y-4'
                    >
                        <h1 className='text-2xl text-green-900 underline decoration-underline xs:text-4xl'>
                            About
                        </h1>
                        <div className='text-sm space-y-4 xs:text-base'>
                            <p>
                                I am a first year Computer Science student at
                                UCSC. I have been programming for 2 years now
                                and I've held a few internship positions at
                                startups. Most of my work was related to web
                                development and RESTful API design.
                            </p>
                            <p>
                                I enjoy working in teams and some of my favorite
                                experiences of programming were from hackathons.
                                My team and I, a group of 4, once designed and
                                deployed a personal spending data aggregation
                                web application, which won 2nd place out of 415
                                participants.
                            </p>
                            <p>
                                I am now looking for an internship opportunity
                                next summer (2023) to gain more in-person
                                exposure in technology and the industry. I also
                                want to use that opportunity to grow technically
                                and personally so I could succeed in my future
                                endeavors.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
