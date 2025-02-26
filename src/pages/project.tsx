import React from 'react';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ExternalLinks from '../components/ExternalLinks';
import '../styles/Project.css';

const ProjectPage = () => {
    const projectList = {
        "Hospital Management System": {
            "description": "A system that allows patients to register their information, schedule appointment, and a comprehensive admin panel for scheduling and canceling appointments with SMS Notification.",
            "gitHub": "https://github.com/Rache-dev/hospital-management",
            "link": "https://hospital-management-opal-tau.vercel.app/",
            "techStack": ["React", "JavaScript", "Next.js", "PostgreSQL", "Twilio API","TypeScript"]
        },
        "University Library Management System": {
            "description": "System that allows students and faculty to search, borrow, and manage books online, view borrowed books, due dates, and request extensions, administrators manage book inventory, track borrow history.",
            "gitHub": "https://github.com/Rache-dev/universityLibrary",
            "link": "https://university-library-eight-sage.vercel.app/sign-in",
            "techStack": ["React", "Next.js", "PostgreSQL", "Twilio API","TypeScript","Redis", "Auth.js"]
        },
        "Staff Management System": {
           "description": "A staff management system designed to streamline employee scheduling, attendance tracking, and performance monitoring.",
            "gitHub": "https://github.com/Rache-dev/StaffManagementv2",
            "link": "",
            "techStack": ["Java"]
        },
        "Riera Textiles E-commerce System": {
            "description": "An e-commerce platform that allows users to browse products, add items to cart, and place orders, a secure payment processing, order tracking. Administrators manage inventory, process orders, and track sales.",
            "gitHub": "https://github.com/Rache-dev/RieraTex-Ecommerce-System",
            "techStack": ["PHP", "Laravel", "TailwindCSS", "MySQL"],
            "link": ""
        },
        "Event Website": {
            "gitHub": "https://github.com/Rache-dev/event-website",
            "description": "An interactive event website that allows users to browse, view in events effortlessly. It provides event details, ticketing, scheduling, and real-time event updates to enhance user engagement and streamline event management.",
            "link": "https://eventchamp-home.netlify.app/",
            "techStack": ["React","PostgreSQL", "TypeScript"]
        },
    }
    return (
        <div id='projects'>
            <div className='section-header'>
                <span className='section-title'>/ Pet Projects</span>
            </div>
            <div className='project-container'>
                <ul className="projects-grid">
                    {
                        Object.keys(projectList).map((index, i) => (
                            <li className="projects-card">
                                <div className="card-header">
                                    <div className="folder-icon">
                                        <FolderOpenIcon style={{ fontSize: 35 }}></FolderOpenIcon>
                                    </div>
                                    <ExternalLinks gitHub={projectList[index as keyof typeof projectList]["gitHub"]} openLink={projectList[index as keyof typeof projectList]["link"]}></ExternalLinks>
                                </div>

                                <div className="card-title">{index}</div>
                                <div className="card-desc mt-2 text-sm leading-normal">{projectList[index as keyof typeof projectList]["description"]}</div>
                                <ul className="card-tech mt-2 flex flex-wrap">
                                    {projectList[index as keyof typeof projectList]["techStack"].map((key, i) => (
                                        <li className='mt-2 mr-1.5' key={i}>
                                            <div className="flex rounded-full text-center items-center bg-teal-400/10 px-3 py-1 text-s font-medium leading-5 text-teal-300">{key}</div>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </div>
    );
};

export default ProjectPage;