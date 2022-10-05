import WorkExperience from './WorkExperience'
// Constants
import { experience } from '../constants/experience'

const Experience = () => {
    return (
        <section id='experience' className='h-[calc(100vh-72px)] flex flex-col justify-center'>
            <h1 className='mb-4 text-3xl uppercase tracking-widest text-green-900 underline decoration-underline px-5 xs:px-10'>
                Experience
            </h1>
            <div className='flex snap-x snap-mandatory space-x-4 xs:space-x-6 overflow-x-scroll pl-5 pr-10 xs:pl-10 xs:pr-16'>
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
