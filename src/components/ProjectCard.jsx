import { Link } from "react-router-dom"

export default function ProjectCard({project}){
    return(
        <div key={project.id} className="card bg-base-100 shadow-xl">

            <figure className="h-52 bg-base-300 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="card-body">

                <h3 className="card-title">
                    {project.name}
                </h3>

                <p className="text-base-content/60">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="badge"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="card-actions mt-4">
                    <div className="flex flex-wrap gap-3">

                        <Link
                            to={`/portfolio/${project.slug}`}
                            className="btn btn-primary btn-sm"
                        >
                            View Details
                        </Link>

                        {project.liveDemo && (
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-sm"
                            >
                                Live Demo
                            </a>
                        )}

                        <a target="_blank" href={project.github} className="btn btn-outline btn-sm" >
                            GitHub
                        </a>

                    </div>

                </div>

            </div>
        </div>
    )
}