const technologies = [
    {
        name: "HTML5",
        icon: "https://cdn-icons-png.flaticon.com/512/174/174854.png"
    },
    {
        name: "CSS3",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png"
    },
    {
        name: "JavaScript",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
    },
    {
        name: "React",
        icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
    },
    {
        name: "Node.js",
        icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png"
    },
    {
        name: "Express.js",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
    },
    {
        name: "MongoDB",
        icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png"
    },
    {
        name: "Git",
        icon: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png"
    },
    {
        name: "GitHub",
        icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png"
    },
    {
        name: "MySQL",
        icon: "https://cdn-icons-png.flaticon.com/128/18405/18405529.png"
    },
    {
        name: "Java",
        icon: "https://cdn-icons-png.flaticon.com/128/3291/3291669.png"
    },
    {
        name: "Express JS",
        icon: "https://img.icons8.com/?size=80&id=9Gfx4Dfxl0JK&format=png"
    },
    {
        name: "Javascript",
        icon: "https://cdn-icons-png.flaticon.com/128/1199/1199124.png"
    },
    {
        name: "Python",
        icon: "https://cdn-icons-png.flaticon.com/128/3098/3098090.png"
    },
    {
        name: "Tailwind CSS",
        icon: "https://img.icons8.com/?size=80&id=WoopfRcDj3RF&format=png"
    },
    {
        name: "Bootstrap",
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
    }
];

export default function Skills(){
    return(
        <div className="container mx-auto py-20 px-6 rounded-2xl overflow-hidden">

        <p className="text-primary font-semibold pb-4">
            TECH STACK
        </p>

        <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
                <div
                    key={tech.name}
                    className="flex items-center gap-2 bg-base-200 px-5 py-4 rounded shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                    <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-5 h-5 object-contain"
                    />

                    <span className="text-sm font-medium">
                        {tech.name}
                    </span>
                </div>
            ))}
        </div>

    </div>
    )    
}
