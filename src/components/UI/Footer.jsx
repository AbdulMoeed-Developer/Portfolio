import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="footer footer-horizontal footer-center bg-base-100 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
            <Link to={'/about'} className="link link-hover" >About Me</Link>
            <Link to={'/contact'} className="link link-hover">Contact Me</Link>
            <Link to={'/portfolio'} className="link link-hover">Portfolio</Link>
        </nav>
        <nav>
            <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/AbdulMoeed-Developer" target="_blank" >
                <FaGithub className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/abdul-moeed-705a0b332" target="_blank" >
                <FaLinkedin className="w-7 h-7" />
            </a>
            </div>
        </nav>
        <aside>
            <p className="font-bold text-lg">
                Abdul Moeed
            </p>

            <p className="text-base-content/60">
                MERN Stack Web Developer
            </p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        </footer>
    )
}