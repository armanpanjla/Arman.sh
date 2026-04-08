import Hireflow from "../assets/projectimgs/Hireflow.png"
import homelyStay from "../assets/projectimgs/homelyStay.png"
import webtalk from "../assets/projectimgs/webtalk.png"
export const Projects = [
    {
        name: "Hireflow",
        subhead: "An end-to-end applicant tracking platform engineered to streamline the modern recruitment lifecycle. It features role-based dashboards, automated candidate pipelines, and secure data management. Designed for scalability, it empowers HR teams to evaluate and manage top talent through a clean, intuitive interface.",
        img: Hireflow,
        creationmonth: "April-2025",
        completion: "Completed",
        techlist: ["React", "mongodb","express js","Node js","Redux toolkit","Tailwind CSS"],
        github:"https://github.com/armanpanjla/HireFlow-dev"

    }, {
        name: "HomelyStay",
        subhead: "A comprehensive property booking platform featuring advanced search filters, real-time availability, and secure payment processing.",
        img: homelyStay,
        creationmonth: "Feb-2026",
        completion: "In Progress",
        techlist:["React", "Node.js", "MongoDB","Express js", "Cloudinary"],
        github:"https://github.com/armanpanjla/HomeStay"
    }, {
        name: "Webtalk",
        subhead: "A high-performance, real-time communication application built for seamless peer-to-peer collaboration. Utilizing WebRTC and bidirectional event-based architecture, it delivers ultra-low latency video calling and instant messaging. The platform prioritizes secure, uninterrupted connectivity within a sleek, responsive user environment.",
        img: webtalk,
        creationmonth: "December-2025",
        completion: "Completed",
        techlist :["React", "WebRTC", "Socket.io", "Node.js", "Redis"],
        github:"https://github.com/armanpanjla/mern-chat-app"
    }
]
