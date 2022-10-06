import Project from './Project'
import { projects } from '../constants/projects'

const Projects = () => {
    return (
        <section
            id='projects'
            className='relative mx-auto flex min-h-full flex-col justify-center pt-[72px] sm:max-w-xl xl:max-w-none'
        >
            <h1 className='px-10 text-3xl uppercase tracking-widest text-green-900 underline decoration-underline sm:text-center xl:text-4xl'>
                Projects
            </h1>
            <div className='mx-auto flex overflow-x-scroll'>
                {projects.map((p) => (
                    <Project key={p.id} {...p} />
                ))}
            </div>
        </section>
    )
}

export default Projects
