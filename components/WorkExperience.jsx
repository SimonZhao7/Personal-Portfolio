import Image from 'next/image'
// Framer Motion
import { motion } from 'framer-motion'

const WorkExperience = ({ image, company, position, details }) => {
    return (
        <div className='snap-center ease min-w-full snap-always space-y-6 rounded-lg bg-[#A8B888] p-8 shadow-lg transition duration-100 hover:brightness-110 xs:p-10 md:min-w-[500px] xl:flex-1 xl:min-w-0'>
            <div className='flex w-full justify-center'>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='w-24 xs:w-32 md:w-38'
                >
                    <Image
                        src={image}
                        className='rounded-full'
                        alt={company + ' logo'}
                    />
                </motion.div>
            </div>
            <article className='space-y-2'>
                <h1 className='text-xl xs:text-2xl md:text-2xl 2xl:text-3xl'>{position}</h1>
                <h3 className='text-sm italic xs:text-base md:text-lg 2xl:text-xl'>{company}</h3>
                <ul className='list-disc space-y-2'>
                    {details?.map((d, i) => (
                        <li className='w-full break-words text-sm 2xl:text-xl' key={i}>
                            {d}
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    )
}

export default WorkExperience
