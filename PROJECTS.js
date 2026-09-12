import busApp from "./src/assets/bus-app.png";
import chatApp from "./src/assets/chat-app.png";
import shopApp from "./src/assets/shop-app.png";
import yelpCamp from "./src/assets/yelpCamp.png";
import ToDoApp from "./src/assets/ToDo.png";
import devionAdmin from "./src/assets/devionAdmin.png";
import sidraLLC from "./src/assets/sidraLLC.png";

export const PROJECTS = [
    {
        id: 1,
        name: "Devion Chat",
        slug: "devion-chat",
        image: chatApp,

        description:
            "A real-time chat application with user authentication, one-to-one messaging, online status, and real-time communication.",

        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.io",
        ],

        features: [
            "User authentication",
            "One-to-one messaging",
            "Real-time communication",
            "Online/offline status",
            "Image sharing",
            "Responsive interface",
        ],

        details:
            "Devion Chat is a full-stack real-time messaging application built with the MERN stack. Socket.io is used to provide real-time communication between users, while Zustand manages frontend state.",

        liveDemo:
            "https://devion-chats-production.up.railway.app/login",

        github:
            "https://github.com/AbdulMoeed-Developer/Devion-Chats",

        video: "",
    },

    {
        id: 2,
        name: "Devion Transport",
        slug: "devion-transport",
        image: busApp,

        description:
            "A full-stack transportation management system for managing buses, terminals, routes, users, and bookings.",

        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "EJS",
            "Bootstrap",
        ],

        features: [
            "Bus management",
            "Terminal management",
            "Route management",
            "User authentication",
            "Booking system",
            "Admin management",
        ],

        details:
            "Devion Transport is a full-stack transportation management system designed to manage buses, terminals, routes, users, and bookings from a centralized platform.",

        liveDemo: "",
        github: "",
        video: "https://www.youtube.com/embed/MP7F52OIBCQ",
    },

    {
        id: 3,
        name: "E-Commerce Store",
        slug: "e-commerce-store",
        image: shopApp,

        description:
            "A modern and responsive e-commerce application with product browsing, categories, product details, and a clean shopping interface.",

        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
            "DaisyUI",
        ],

        features: [
            "Product browsing",
            "Product categories",
            "Product details",
            "Responsive design",
            "Modern UI",
        ],

        details:
            "A modern e-commerce frontend built with React and Vite. The application focuses on reusable components, responsive layouts, and a clean shopping experience.",

        liveDemo: "",
        github: "",
        video: "https://www.youtube.com/embed/g57P3kSBypM",
    },

    {
        id: 4,
        name: "YelpCamp",
        slug: "yelpcamp",
        image: yelpCamp,

        description:
            "A full-stack campground platform where users can explore campgrounds, create listings, leave reviews, and interact with other users.",

        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "Bootstrap",
        ],

        features: [
            "User authentication",
            "Create campground listings",
            "Edit and delete listings",
            "Reviews and ratings",
            "Image uploads",
            "Responsive design",
        ],

        details:
            "YelpCamp is a full-stack campground platform where authenticated users can create and manage campground listings, upload images, and leave reviews.",

        liveDemo:
            "https://yelp-camp-red-eight.vercel.app/",

        github:
            "https://github.com/AbdulMoeed-Developer/YelpCamp",

        video: "",
    },

    {
        id: 5,
        name: "To-Do App",
        slug: "todo-app",
        image: ToDoApp,

        description:
            "A responsive task management application for creating, updating, completing, and organizing daily tasks.",

        technologies: [
            "React",
            "Vite",
            "Context API",
            "Material UI",
        ],

        features: [
            "Create tasks",
            "Edit tasks",
            "Complete tasks",
            "Delete tasks",
            "Task organization",
            "Responsive interface",
        ],

        details:
            "A responsive task management application built with React. The project uses Context API for managing application state and Material UI for the interface.",

        liveDemo:
            "https://to-do-list-three-theta-76.vercel.app/",

        github:
            "https://github.com/AbdulMoeed-Developer/ToDo-list",

        video: "",
    },

    {
        id: 6,
        name: "Devion Admin Panel",
        slug: "devion-admin",
        image: devionAdmin,

        description:
            "An admin dashboard for managing transportation data with a responsive interface for handling buses, terminals, and other system resources.",

        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
            "DaisyUI",
        ],

        features: [
            "Admin dashboard",
            "Bus management",
            "Terminal management",
            "User management",
            "Responsive dashboard",
        ],

        details:
            "Devion Admin is the administrative interface for the Devion Transport system. It provides administrators with a centralized dashboard for managing transportation-related resources.",

        liveDemo: "",
        github: "",
        video: "",
    },

    {
        id: 7,
        name: "Sidra Waqar Enterprises LLC",
        slug: "sidra-waqar",
        image: sidraLLC,

        description:
            "A responsive business website developed for Sidra Waqar Enterprises LLC.",

        technologies: [
            "Node.js",
            "Express",
            "EJS",
            "Bootstrap",
            "EmailJS",
        ],

        features: [
            "Responsive business website",
            "Company information",
            "Contact form",
            "Responsive navigation",
            "Modern business layout",
        ],

        details:
            "A professional business website developed for Sidra Waqar Enterprises LLC. The project includes a responsive frontend and a contact form for communicating with the business.",

        liveDemo:
            "https://www.sidrawaqar.com/",

        github:
            "https://github.com/AbdulMoeed-Developer/Sidrawaqar",

        video: "",
    },
];