import { Link } from "react-router-dom";

import {PROJECTS} from "../../PROJECTS.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Portfolio(){
    return(
        <section>
        <section className="py-24 bg-base-200">
        <div className="container mx-auto px-6">

        <div className="mb-12 max-w-2xl">
            <p className="text-primary font-semibold tracking-widest text-sm">
                PORTFOLIO
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-2">
                Things I've Built
            </h2>

            <p className="text-base-content/60 mt-4 leading-relaxed">
                A collection of projects I've built while learning and exploring
                modern web development, from full-stack applications to frontend
                experiments.
            </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                    <ProjectCard project={project} />
              ))}
          </div>

        </div>
        </section>
        </section>
    )
}