import { Link } from "react-router-dom"
import myImage from '../assets/abdulmoeed.png';
import AboutSection from "./AboutSection";

export default function Hero(){
    // return(
    //     <header className="bg-base-200 pb-10 rounded-b-4xl px-2">
    //         <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 mx-auto p-15">
    //             <div className="">

    //                 {/* Small intro */}
    //                 <p className="text-primary font-medium text-lg mb-3">
    //                     Hi, I'm
    //                 </p>

    //                 {/* Name */}
    //                 <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
    //                     Abdul Moeed
    //                 </h1>

    //                 {/* Role */}
    //                 <p className="text-2xl md:text-3xl font-semibold mt-4">
    //                     <span className="text-primary uppercase">MERN</span> Stack Developer
    //                 </p>

    //                 {/* Description */}
    //                 <p className="text-base-content/70 text-lg leading-relaxed mt-6 max-w-xl">
    //                     I build modern, responsive and user-friendly web applications
    //                     using React, Node.js, Express and MongoDB. I'm passionate about
    //                     turning ideas into clean and functional digital experiences.
    //                 </p>

    //                 {/* Buttons */}
    //                 <div className="flex flex-wrap gap-4 mt-8">
    //                     <a
    //                         href="#projects"
    //                         className="btn btn-primary"
    //                     >
    //                         View My Projects
    //                     </a>

    //                     <a
    //                         href="#contact"
    //                         className="btn btn-outline"
    //                     >
    //                         Contact Me
    //                     </a>
    //                 </div>

    //                 {/* Availability */}
    //                 <div className="flex items-center gap-2 mt-8 text-sm text-base-content/60">
    //                     <span className="w-2.5 h-2.5 bg-success rounded-full"></span>
    //                     Available for internships & opportunities
    //                 </div>

    //             </div>
    //             <div className="">
    //                 <img src={myImage} alt="abdul moeed" srcset="" className="rounded-2xl object-cover object-top"/>
    //             </div>
    //         </div>
    //     </header>
    // )

    return (
  <header className="relative overflow-hidden bg-base-200 rounded">
    
    {/* Background decoration */}
    <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

    <div className="container relative mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 py-20 md:px-12 lg:px-16 lg:py-28">

      {/* LEFT */}
      <div>

        {/* Intro badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-base-content/10 bg-base-100/50 px-4 py-2 text-sm font-medium backdrop-blur mb-6">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          Available for internships & opportunities
        </div>

        {/* Intro */}
        <p className="text-primary font-semibold text-lg mb-2">
          Hi, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Abdul Moeed<span className="text-primary">.</span>
        </h1>

        {/* Role */}
        <h2 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-semibold">
          <span className="text-primary">MERN</span>{" "}
          Stack Developer
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-base-content/65">
          I build modern, responsive and user-friendly web applications
          using React, Node.js, Express and MongoDB. I enjoy turning ideas
          into clean, functional and meaningful digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#projects"
            className="btn btn-primary px-6"
          >
            View My Projects
          </a>

          <Link
            to={'/contact'}
            className="btn btn-outline px-6"
          >
            Contact Me
          </Link>
        </div>

        {/* Tech stack mini */}
        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-base-content/50">
          <span>React</span>
          <span>•</span>
          <span>Node.js</span>
          <span>•</span>
          <span>Express</span>
          <span>•</span>
          <span>MongoDB</span>
        </div>

      </div>

      {/* RIGHT */}
      <div className="relative flex justify-center md:justify-end">

        {/* Glow behind image */}
        <div className="absolute inset-10 bg-primary/20 blur-3xl rounded-full" />

        {/* Image container */}
        <div className="relative w-full max-w-md">

          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/50 via-transparent to-secondary/30 blur-sm" />

          <div className="relative overflow-hidden rounded-3xl border border-base-content/10 bg-base-100/40 backdrop-blur-sm">

            <img
              src={myImage}
              alt="Abdul Moeed"
              className="w-full object-cover object-top"
            />

          </div>

          {/* Floating card */}
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-base-content/10 bg-base-100/80 px-5 py-4 shadow-xl backdrop-blur-md">
            <p className="text-xs text-base-content/50">
              Currently building
            </p>
            <p className="font-semibold">
              Full-Stack Experiences
            </p>
          </div>

        </div>
      </div>

    </div>
  </header>
);
}

