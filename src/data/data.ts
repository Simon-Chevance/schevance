import Landing from "../assets/img/landing.png"
import Railroad from "../assets/img/railroad.png"
import mba from "../assets/img/mba.png"

export const projectsData = [
    {
        id: 1,
        title: "LANDING_PAGE",
        description: "Small landing page for a fake platform that provides a solution.",
        longDescription: "Small landing page for a fake platform that provides a solution.",
        technologies: ["React", "Tailwind CSS", "Nextjs", "Lucide-react"],
        status: "ONLINE",
        completionPercentage: 100,
        image: Landing,
        github: "https://github.com/yourusername/portfolio",
        live: "https://landing.schevance.io/",
        year: 2025,
        featured: true
    },
    {
        id: 2,
        title: "RAIL_ROAD",
        description: "E-commerce platform with cryptocurrency integration to buy transport tickets with Metamask.",
        longDescription: "Decentralized marketplace system operating on a custom blockchain network. Implements military-grade encryption for all transactions, anonymous routing through a proprietary neural network, and zero-knowledge proofs for ultimate privacy.",
        technologies: ["React", "Blockchain", "MUI", "Ethers", "WEB3", "Metamask"],
        status: "SCHOOL",
        completionPercentage: 100,
        image: Railroad,
        github: "https://github.com/Simon-Chevance/railroad",
        year: 2024,
        featured: true
    },
    {
        id: 3,
        title: "MES_BONNES_ADRESSES",
        description: "Find the best addresses all over our repositories.",
        longDescription: "Climate visualization and prediction system with augmented reality interfaces. Parses satellite imagery and meteorological data to create interactive 3D models of weather patterns with predictive algorithms for climate shifts and anomalies.",
        technologies: ["React Native", "Node.js", "Expo", "Firebase"],
        status: "SCHOOL",
        completionPercentage: 100,
        image: mba,
        github: "https://github.com/Simon-Chevance/mes-bonnes-adresses",
        year: 2023,
        featured: false
    },
    {
        id: 4,
        title: "CORTEX_LINK",
        description: "Neural productivity suite with brain-computer interface support and holographic task visualization.",
        longDescription: "Next-generation productivity system designed to interface directly with neural implants. Projects task management into the user's visual field through proprietary holographic technology and tracks productivity metrics through non-invasive neural monitoring.",
        technologies: ["React", "Firebase", "Neuro API", "WebGL", "TensorFlow"],
        status: "DEBUGGING",
        completionPercentage: 60,
        image: "https://via.placeholder.com/300",
        github: "https://github.com/yourusername/task-manager",
        year: 2024,
        featured: false
    },
    {
        id: 5,
        title: "GHOST_PROTOCOL",
        description: "Darknet social monitoring system that tracks digital footprints across the web.",
        longDescription: "Advanced digital identity monitoring system that correlates data fragments across the entire network to create comprehensive identity profiles. Uses quantum pattern recognition to identify digital footprints and predict social engineering vulnerabilities.",
        technologies: ["React", "Chart.js", "Node.js", "Quantum Encryption", "Pattern Recognition API"],
        status: "ENCRYPTED",
        completionPercentage: 40,
        image: "https://via.placeholder.com/300",
        year: 2024,
        featured: false
    },
    {
        id: 6,
        title: "NEXUS_OVERRIDE",
        description: "Augmented reality interface for direct neural manipulation of IoT devices.",
        longDescription: "Revolutionary control system for networked devices using augmented reality and neural input processing. Allows users to control connected devices with thought patterns and gesture recognition, with military-grade security protocols.",
        technologies: ["React Native", "IoT Protocol", "Neural Interface", "AR Kit", "Gesture Recognition"],
        status: "PROTOTYPE",
        completionPercentage: 30,
        image: "https://via.placeholder.com/300",
        github: "https://github.com/yourusername/nexus",
        year: 2024,
        featured: false
    }
];

export const getFeaturedProjects = () => {
    return projectsData.filter(project => project.featured);
};

export const getProjectsByYear = (year) => {
    return projectsData.filter(project => project.year === year);
};

export const getProjectsByStatus = (status) => {
    return projectsData.filter(project => project.status === status);
};

export const getProjectById = (id) => {
    return projectsData.find(project => project.id === id);
};

export const getCompletedProjects = () => {
    return projectsData.filter(project => project.completionPercentage === 100);
};

export const getInProgressProjects = () => {
    return projectsData.filter(project => project.completionPercentage > 0 && project.completionPercentage < 100);
};

// Project status definitions
export const projectStatuses = {
    ONLINE: "Fully operational and accessible",
    DEBUGGING: "Functional but undergoing fixes",
    COMPILING: "In active development",
    ENCRYPTED: "Early prototype stage",
    PROTOTYPE: "Conceptual development"
};