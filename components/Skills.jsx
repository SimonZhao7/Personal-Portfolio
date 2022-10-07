import Image from 'next/image'
// Constants
import { skills } from '../constants/skills'

const Skills = () => {
    return (
        <section id='skills' className='min-h-screen pt-[72px] flex justify-center flex-col'>
            <h1 className='text-3xl uppercase tracking-widest px-10 text-green-900 underline decoration-underline sm:text-center xl:text-4xl'>
                Skills
            </h1>
            <div className='grid grid-cols-2 xs:grid-cols-3 p-10 gap-4 w-full sm:max-w-2xl mx-auto lg:grid-cols-4 2xl:max-w-3xl'>
                {skills.map((s) => (
                    <div key={s.id} className='rounded-full border-[1px] border-green-900 hover:bg-green-900/80 group relative w-32 h-32 flex items-center justify-center transition duration-100 ease-in place-items-center 2xl:w-40 2xl:h-40'>
                        <Image src={s.icon} layout='fill' className='rounded-full absolute transition duration-100 ease-in -z-10' />
                        <p className='opacity-0 group-hover:opacity-100 text-white font-semibold text-xl transition duration-100 ease-in 2xl:text-2xl'>{s.proficiency}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
