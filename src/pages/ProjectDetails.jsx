import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../../PROJECTS.js";

export default function ProjectDetails(){
    const { slug } = useParams();

    const project = PROJECTS.find(
        (project) => project.slug === slug
    );

    if (!project) {
        return (
            <section className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Project Not Found
                    </h1>

                    <Link
                        to="/portfolio"
                        className="btn btn-primary"
                    >
                        Back to Projects
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <main className="min-h-screen py-20">

            {/* Hero */}
            <section className="container mx-auto px-6">

                <div className="max-w-4xl mx-auto text-center">

                    <p className="text-primary font-semibold mb-3">
                        PROJECT
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold">
                        {project.name}
                    </h1>

                    <p className="text-base-content/70 text-lg mt-6 max-w-2xl mx-auto">
                        {project.description}
                    </p>

                </div>


                {/* Project Image */}
                <div className="max-w-5xl mx-auto mt-12">

                    <div className="rounded-3xl overflow-hidden bg-base-200 shadow-xl">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full object-cover"
                        />
                    </div>

                </div>

            </section>


            {/* Project Information */}
            <section className="container mx-auto px-6 mt-16">

                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

                    {/* About */}
                    <div className="md:col-span-2">

                        <p className="text-primary font-semibold mb-2">
                            ABOUT THE PROJECT
                        </p>

                        <h2 className="text-3xl font-bold mb-5">
                            What I built
                        </h2>

                        <p className="text-base-content/70 text-lg leading-relaxed">
                            {project.details}
                        </p>

                    </div>


                    {/* Technologies */}
                    <div>

                        <p className="text-primary font-semibold mb-2">
                            TECHNOLOGIES
                        </p>

                        <h2 className="text-2xl font-bold mb-5">
                            Tech Stack
                        </h2>

                        <div className="flex flex-wrap gap-2">

                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="badge badge-lg badge-outline"
                                >
                                    {technology}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* Features */}
            <section className="container mx-auto px-6 mt-20">

                <div className="max-w-5xl mx-auto">

                    <p className="text-primary font-semibold mb-2">
                        HIGHLIGHTS
                    </p>

                    <h2 className="text-3xl font-bold mb-8">
                        Key Features
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">

                        {project.features.map((feature) => (
                            <div
                                key={feature}
                                className="bg-base-200 rounded-2xl p-6"
                            >
                                <div className="text-primary text-xl mb-3">
                                    ✓
                                </div>

                                <h3 className="font-semibold">
                                    {feature}
                                </h3>
                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* Demo Video */}
            {project.video && (
                <section className="container mx-auto px-6 mt-20">

                    <div className="max-w-5xl mx-auto">

                        <p className="text-primary font-semibold mb-2">
                            DEMO
                        </p>

                        <h2 className="text-3xl font-bold mb-8">
                            See It In Action
                        </h2>

                        <div className="aspect-video rounded-3xl overflow-hidden bg-base-200">

                            <iframe
                                src={project.video}
                                title={`${project.name} demo`}
                                className="w-full h-full"
                                allowFullScreen
                            />

                        </div>

                    </div>

                </section>
            )}


            {/* Buttons */}
            <section className="container mx-auto px-6 mt-20">

                <div className="max-w-5xl mx-auto flex flex-wrap gap-4">

                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Live Demo
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            View GitHub
                        </a>
                    )}

                    <Link
                        to="/portfolio"
                        className="btn btn-ghost"
                    >
                        ← Back to Projects
                    </Link>

                </div>

            </section>

        </main>
    );
};
