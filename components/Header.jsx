import { useRouter } from 'next/router'
// Framer Motion
import { motion } from 'framer-motion'
// Icons
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MailIcon } from '@heroicons/react/outline'

const Header = () => {
    const router = useRouter()

    return (
        <header className='flex p-5 justify-between sticky top-0 z-20'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: [0, 0.1, 1],
                }}
                transition={{
                    duration: 1.5,
                }}
                viewport={{ once: true }}
                className='flex space-x-4  items-center'
            >
                <FaLinkedin
                    className='socialIcon'
                    onClick={() =>
                        router.push(
                            'https://www.linkedin.com/in/simon-zhao-6813541b3/'
                        )
                    }
                />
                <FaGithub
                    className='socialIcon'
                    onClick={() => router.push('https://github.com/SimonZhao7')}
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: [0, 0.1, 1],
                }}
                transition={{
                    duration: 1.5,
                }}
                viewport={{ once: true }}
            >
                <MailIcon
                    className='socialIcon'
                    onClick={() => router.push('mailto:zhaosimon7@gmail.com')}
                />
            </motion.div>
        </header>
    )
}

export default Header
