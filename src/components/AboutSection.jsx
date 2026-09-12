import { Link } from 'react-router-dom'

import abdulDev from '../assets/abdul-dev.png'

export default function AboutSection(){
    return(
    <div className="bg-base-300 py-20 px-6">
        <div className="container mx-auto">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10">

                {/* Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={abdulDev}
                        alt="Abdul Moeed"
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
                    />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                    <p className="text-primary font-semibold mb-2">
                        ABOUT ME
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Building ideas into{" "}
                        <span className="text-primary">real experiences.</span>
                    </h2>

                    <p className="text-base-content/70 text-lg leading-relaxed">
                        I'm a Full Stack Web Developer focused on building modern,
                        responsive, and user-friendly web applications. I work
                        primarily with JavaScript, React, Node.js, Express, and
                        MongoDB, and enjoy turning ideas into practical digital
                        experiences.
                    </p>

                    <p className="text-base-content/70 text-lg leading-relaxed mt-5">
                        I'm constantly learning and improving my skills by building
                        real-world projects, exploring new technologies, and solving
                        problems through code.
                    </p>

                    <Link
                        to={'/about'}
                        className="btn btn-primary mt-7"
                    >
                        Read More
                    </Link>
                </div>

            </div>
        </div>
    </div>
    )
}