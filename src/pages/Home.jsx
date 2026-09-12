import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Skills from "../components/Skills";
import { PROJECTS } from "../../PROJECTS";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="bg-base-100 text-base-content">
        <Hero/>
        <AboutSection/>

      {/* ================= SKILLS ================= */}
      <Skills/>


      {/* ================= FEATURED PROJECTS ================= */}
      <section id="projects" className="py-24 bg-base-200">
        <div className="container mx-auto px-6">

          <div className="flex justify-between items-end mb-12">

            <div>
              <p className="text-primary font-semibold">
                PORTFOLIO
              </p>

              <h2 className="text-4xl font-bold mt-2">
                Featured Projects
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="btn btn-ghost hidden md:flex"
            >
              View All →
            </Link>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.filter((p)=> p.id <= 3).map((p)=>(
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

        </div>
      </section>


      {/* ================= EXPERIENCE / EDUCATION ================= */}
    <section className="py-24 bg-base-200">
        <div className="container mx-auto px-6">

            <div className="text-center mb-16">
                <p className="text-primary font-semibold tracking-widest text-sm">
                    MY JOURNEY
                </p>

                <h2 className="text-4xl lg:text-5xl font-bold mt-2">
                    Experience & Education
                </h2>

                <p className="text-base-content/60 max-w-2xl mx-auto mt-4">
                    A look at my journey from learning the fundamentals of
                    programming to building real-world web applications.
                </p>
            </div>

            <div className="max-w-3xl mx-auto">

                {/* Internship */}
                <div className="relative border-l-2 border-primary pl-8 pb-14">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary" />

                    <p className="text-sm text-primary font-semibold">
                        2026 — Present
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                        Web Development Intern
                    </h3>

                    <p className="text-base-content/60 mt-3 leading-relaxed">
                        Working on real-world web development projects,
                        improving frontend and backend development skills
                        while gaining experience in a professional environment.
                    </p>
                </div>

                {/* Education */}
                <div className="relative border-l-2 border-primary pl-8">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary" />

                    <p className="text-sm text-primary font-semibold">
                        2025 — Present
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                        BS Computer Science
                    </h3>

                    <p className="text-base-content/60 mt-3 leading-relaxed">
                        Studying computer science with a focus on software
                        development, programming fundamentals, and modern
                        technologies.
                    </p>
                </div>

            </div>
        </div>
    </section>


      {/* ================= CTA ================= */}
      <section className="py-24 bg-primary text-primary-content">

        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Have a project in mind?
          </h2>

          <p className="mt-5 opacity-90 max-w-xl mx-auto">
            I'm always interested in working on interesting projects,
            collaborating with developers and learning new things.
          </p>

          <Link
            to="/contact"
            className="btn bg-base-100 text-base-content border-none mt-8"
          >
            Let's Work Together
          </Link>

        </div>

      </section>
    </main>
  );
}