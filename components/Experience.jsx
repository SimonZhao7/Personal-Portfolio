import WorkExperience from './WorkExperience'
// Constants
import { experience } from '../constants/experience'

const Experience = () => {
    return (
        <section
            id='experience'
            className='flex h-[calc(100vh-72px)]  flex-col justify-center 2xl:max-w-[1536px] mx-auto'
        >
            <h1 className='mb-4 px-5 text-3xl uppercase tracking-widest text-green-900 underline decoration-underline xs:px-10 xl:text-4xl'>
                Experience
            </h1>
            <div className='flex min-h-max snap-x snap-mandatory space-x-4 overflow-x-scroll pl-5  pr-10 xs:space-x-6 xs:pl-10 xs:pr-16 xl:w-full xl:pr-10'>
                {experience.map((e) => {
                    const { id, image, company, position, details } = e
                    return (
                        <WorkExperience
                            key={id}
                            id={id}
                            image={image}
                            company={company}
                            position={position}
                            details={details}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Experience
