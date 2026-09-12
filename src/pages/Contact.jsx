import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact (){
    return (
        <main className="min-h-7/12 py-20">

            {/* Heading */}
            <section className="text-center px-6">

                <p className="text-primary font-semibold">
                    GET IN TOUCH
                </p>

                <h1 className="text-4xl md:text-5xl font-bold mt-2">
                    Let's Connect
                </h1>

                <p className="text-base-content/70 mt-5 max-w-xl mx-auto">
                    Have a project, opportunity, or just want to say hello?
                    Feel free to reach out.
                </p>

            </section>


            {/* Contact Info */}
            <section className="max-w-4xl mx-auto px-6 mt-16">

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Email */}
                    <a
                        href="https://github.com/AbdulMoeed-Developer"
                        target="_blank"
                        className="bg-base-200 rounded-2xl p-7 text-center hover:-translate-y-1 transition"
                    >
                        <FaGithub className="w-7 h-7 text-primary mx-auto" />

                        <h2 className="font-semibold text-lg mt-4">
                            Github
                        </h2>

                        <p className="text-base-content/60 mt-2 text-sm">
                            View my projects
                        </p>
                    </a>


                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/abdul-moeed-705a0b332"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-base-200 rounded-2xl p-7 text-center hover:-translate-y-1 transition"
                    >
                        <FaLinkedin className="w-7 h-7 text-primary mx-auto" />

                        <h2 className="font-semibold text-lg mt-4">
                            LinkedIn
                        </h2>

                        <p className="text-base-content/60 mt-2 text-sm">
                            Connect with me
                        </p>

                    </a>

                </div>
            </section>


            {/* Bottom Message */}
            <section className="text-center px-6 mt-20">

                <p className="text-base-content/60">
                    I'm always open to new opportunities and interesting
                    projects.
                </p>

            </section>

        </main>
    );
};

