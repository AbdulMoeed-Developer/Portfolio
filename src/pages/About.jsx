import aboutImage from '../assets/abdulmoeed-about.jpg'
import webDevCourse from '../assets/image.png'
import pythonCourse from '../assets/pyCourse.png'

export default function About(){
    return (
        <>
        <section className="p-10 bg-base-300">
            <div className="flex flex-col-reverse md:flex-row gap-6 container mx-auto">
            <div>
                <img src={aboutImage} alt="" className='rounded-2xl h-125 w-175 object-cover object-top' />
            </div>
            <div>

                <p className="uppercase font-bold tracking-widest text-sm text-primary mb-3">
                    About Me
                </p>

                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                    Turning ideas into
                    <span className="text-success"> something real.</span>
                </h2>

                <div className="space-y-4 text-base-content/65 leading-relaxed">

                    <p>
                        <span className="text-base-content font-semibold">
                            Hi, I'm Abdul Moeed.
                        </span>
                        My interest in coding started when I studied C++ during
                        my second year of Computer Science. I enjoyed solving
                        problems and turning ideas into something that actually
                        works, which pushed me to explore development further.
                    </p>

                    <p>
                        Before starting university, I took a year to learn web
                        development, including WordPress, and started building
                        projects of my own. Along the way, I learned React,
                        Python, and Data Structures & Algorithms while continuing
                        my university studies.
                    </p>

                    <p>
                        Currently, I'm working toward becoming a strong{" "}
                        <span className="text-base-content font-semibold">
                            MERN stack developer
                        </span>{" "}
                        and building real-world applications. In the future,
                        I want to take that foundation further into{" "}
                        <span className="text-base-content font-semibold">
                            Artificial Intelligence and Machine Learning.
                        </span>
                    </p>

                </div>

                {/* Current Focus */}
                <div className="mt-8 flex flex-wrap gap-3">

                    <div className="badge badge-lg badge-outline">
                        MERN Stack
                    </div>

                    <div className="badge badge-lg badge-outline">
                        Python
                    </div>

                    <div className="badge badge-lg badge-outline">
                        DSA
                    </div>

                    <div className="badge badge-lg badge-outline">
                        Exploring AI / ML
                    </div>

                </div>

            </div>
            </div>
        </section>
        <section className="p-10 bg-base-100">
            <div className="container mx-auto">

                <div className="mb-8">
                    <h1 className="uppercase font-bold text-2xl text-secondary">
                        My Journey
                    </h1>
                </div>

                {/* Web Development Internship */}
                {/* <div className="border-l-2 border-primary pl-6 pb-15 rounded-r-2xl pt-6 pr-5">
                    <p className="text-sm text-base-content/50">
                        2026 — Present
                    </p>

                    <h3 className="text-xl font-bold mt-1">
                        Web Development Intern
                    </h3>

                    <p className="text-secondary font-semibold mt-1">
                        Arch Technologies
                    </p>

                    <p className="text-sm text-base-content/50 mt-1">
                        Pakistan, Islamabad · Remote
                    </p>

                    <p className="text-base-content/60 mt-2">
                        Working on real-world web development projects,
                        improving frontend and backend development skills.
                    </p>
                </div> */}


                {/* BS Computer Science */}
                <div className="border-l-2 border-primary pl-6 pb-15 bg-base-300 rounded-r-2xl pt-6 pr-5">
                    <p className="text-sm text-base-content/50">
                        2025 — Present
                    </p>

                    <h3 className="text-xl font-bold mt-1">
                        BS Computer Science
                    </h3>

                    <p className="text-base-content/60 mt-2">
                        Studying computer science with a focus on software
                        development and modern technologies.
                    </p>
                </div>


                {/* Full Stack Web Developer */}
                <div className="border-l-2 border-primary pl-6 pb-15 rounded-r-2xl pt-6 pr-5">
                    <p className="text-sm text-base-content/50">
                        Feb 2025 — Jun 2025
                    </p>

                    <h3 className="text-xl font-bold mt-1">
                        Full Stack Web Developer
                    </h3>

                    <p className="text-secondary font-semibold mt-1">
                        SidraWaqar Enterprises LLC · Contract
                    </p>

                    <p className="text-sm text-base-content/50 mt-1">
                        Muscat, Oman · Remote
                    </p>

                    <p className="text-base-content/60 mt-3 leading-relaxed">
                        Developed and delivered custom websites using Node.js,
                        Express.js, and Git, creating responsive and scalable
                        solutions tailored to client needs. Implemented features
                        including dynamic backends and form-to-email integration
                        with EmailJS, improving user interaction and online presence.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        <div className="badge badge-outline">Node.js</div>
                        <div className="badge badge-outline">Express.js</div>
                        <div className="badge badge-outline">Git</div>
                        <div className="badge badge-outline">EmailJS</div>
                    </div>

                    <a
                        href="https://www.sidrawaqar.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-primary inline-block mt-4"
                    >
                        View Project →
                    </a>
                </div>

                {/* Web Developer */}
                <div className="border-l-2 border-primary pl-6 pb-15 bg-base-300 rounded-r-2xl pt-6 pr-5">

                    <p className="text-sm text-base-content/50">
                        Oct 2023 — Feb 2024
                    </p>

                    <h3 className="text-xl font-bold mt-1">
                        Web Developer
                    </h3>

                    <p className="text-secondary font-semibold mt-1">
                        Dawahi Alghayzeen United Trading EST. · Contract
                    </p>

                    <p className="text-sm text-base-content/50 mt-1">
                        Oman · Remote
                    </p>

                    <p className="text-base-content/60 mt-3 leading-relaxed">
                        Developed a custom website using Node.js, Express.js, and Git.
                        Collaborated with the client to understand their requirements
                        and delivered a responsive and scalable web solution with a
                        dynamic backend and smooth functionality.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        <div className="badge badge-outline">Node.js</div>
                        <div className="badge badge-outline">Express.js</div>
                        <div className="badge badge-outline">Git</div>
                        <div className="badge badge-outline">Backend</div>
                    </div>

                    <a
                        href="https://dawahi-alghayzeen.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-primary inline-block mt-4"
                    >
                        View Project →
                    </a>

                </div>


                {/* Courses */}
                <div className="border-l-2 border-primary pl-6 pb-15 rounded-r-2xl pt-6 pr-5">

                    <p className="text-sm text-base-content/50">
                        2023 — 2024
                    </p>

                    <h3 className="text-xl font-bold mt-1">
                        Web Development & Programming Courses
                    </h3>

                    <p className="text-base-content/60 mt-2">
                        Built the foundation of my development skills through
                        full-stack web development and Python programming courses.
                    </p>

                    <div className="flex flex-col lg:flex-row gap-10 my-6">

                        {/* Web Developer Bootcamp */}
                        <div className="aura aura-dual w-auto sm:w-96">
                            <div className="card bg-base-200 w-auto sm:w-96 shadow-sm">

                                <div className="card-body">

                                    <h2 className="card-title">
                                        The Web Developer Bootcamp
                                    </h2>

                                    <p className="text-secondary font-bold tracking-wide">
                                        By Colt Steele
                                    </p>

                                    <p>
                                        Learned full-stack web development including
                                        HTML, CSS, JavaScript, Node.js, Express,
                                        MongoDB, and REST APIs.
                                    </p>

                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">
                                            JavaScript
                                        </div>

                                        <div className="badge badge-outline">
                                            Node.js
                                        </div>

                                        <div className="badge badge-outline">
                                            MongoDB
                                        </div>
                                    </div>

                                </div>

                                <figure>
                                    <img
                                        src={webDevCourse}
                                        alt="Web Development Course"
                                    />
                                </figure>

                            </div>
                        </div>


                        {/* Python Course */}
                        <div className="aura aura-dual w-auto sm:w-96">
                            <div className="card bg-base-200 w-auto sm:w-96 shadow-sm">

                                <div className="card-body">

                                    <h2 className="card-title">
                                        Python Course
                                    </h2>

                                    <p className="text-secondary font-bold tracking-wide">
                                        Python Programming
                                    </p>

                                    <p>
                                        Learned Python fundamentals including
                                        variables, functions, data structures,
                                        object-oriented programming, and problem solving.
                                    </p>

                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">
                                            Python
                                        </div>

                                        <div className="badge badge-outline">
                                            DSA
                                        </div>

                                        <div className="badge badge-outline">
                                            Programming
                                        </div>
                                    </div>

                                </div>

                                <figure>
                                    <img
                                        src={pythonCourse}
                                        alt="Python Course"
                                    />
                                </figure>

                            </div>
                        </div>

                    </div>

                    <p className="text-base-content/60 mt-2">
                        These courses helped build the foundation for my journey in
                        web development. I’m currently taking a React course to further
                        strengthen my knowledge and skills in building modern web
                        applications.
                    </p>

                </div>

            </div>
        </section>

        </>
    )
}

