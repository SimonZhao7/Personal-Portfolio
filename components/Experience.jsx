import WorkExperience from './WorkExperience'
// Constants
import { experience } from '../constants/experience'

const Experience = () => {
    return (
        <section
            id='experience'
            className='mx-auto flex min-h-screen flex-col justify-center pt-[72px] 2xl:max-w-[1536px]'
        >
            <h1 className='mb-4 px-5 text-3xl uppercase tracking-widest text-green-900 underline decoration-underline xs:px-10 xl:text-4xl'>
                Experience
            </h1>
            <div className='flex snap-x snap-mandatory space-x-4 overflow-x-scroll pl-5  pr-10 xs:space-x-6 xs:pl-10 xs:pr-16 xl:w-full xl:space-x-8 xl:pr-10'>
                {experience.map((e) => (
                    <WorkExperience key={e.id} {...e} />
                ))}
            </div>
        </section>
    )
}

export default Experience
