import Image from 'next/image'
// Framer Motion
import { motion } from 'framer-motion'

const WorkExperience = ({ image, company, position, details }) => {
    return (
        <div className='min-h-full min-w-full snap-center snap-always space-y-6 rounded-lg bg-[#A8B888] p-8 xs:p-10 shadow-lg hover:brightness-110 transition duration-100 ease'>
            <div className='flex w-full justify-center'>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='w-24 xs:w-32'
                >
                    <Image src={image} className='rounded-full' />
                </motion.div>
            </div>
            <article className='space-y-2'>
                <h1 className='text-xl xs:text-2xl'>{position}</h1>
                <h3 className='text-sm xs:text-base italic'>{company}</h3>
                <ul className='list-disc space-y-2'>
                    {details?.map((d, i) => (
                        <li className='w-full break-words text-sm' key={i}>
                            {d}
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    )
}

export default WorkExperience
