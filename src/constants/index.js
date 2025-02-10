import {
    Appwrite,
    Css,
    Docker,
    ExpoIcon,
    HtmlIcon,
    TailwindIcon,
    Java,
    JsIcon,
    Mongodb,
    NodeIcon,
    MuiIcon,
    Php,
    ReactIcon,
    ReduxIcon,
    TsIcon,
    ViteIcon,
    LinkedinIcon,
    BentoIcon,
    GithubIcon,
    EmailIcon
   } from "../assets"


const navLinks = [
    {
        id: 1,
        label: "Email",
        icon: EmailIcon,
        path: "mailto:simonchevance28@gmail.com"
    },
    {
        id: 2,
        label: "Bento",
        icon: BentoIcon,
        path: "https://bento.me/schevance"
    },
    {
        id: 3,
        label: "Linkedin",
        icon: LinkedinIcon,
        path: "https://www.linkedin.com/in/schevance/"
    },
{
        id: 4,
        label: "Github",
        icon: GithubIcon,
        path: "https://github.com/Simon-Chevance"
    },
]


const technologies = [
    {
        label: "appwrite",
        icon:Appwrite
    },{
        label: "css",
        icon: Css
    },{
        label: "docker",
        icon: Docker
    },{
        label: "expo",
        icon: ExpoIcon
    },{
        label: "html",
        icon: HtmlIcon
    },{
        label: "tailwind",
        icon: TailwindIcon
    },{
        label: "java",
        icon: Java
    },{
        label: "js",
        icon: JsIcon
    },{
        label: "mongodb",
        icon: Mongodb
    },{
        label: "mui",
        icon: MuiIcon
    },{
        label: "php",
        icon: Php
    },{
        label: "nodejs",
        icon: NodeIcon
    },{
        label: "reactjs",
        icon: ReactIcon
    },{
        label: "redux",
        icon: ReduxIcon
    },{
        label: "ts",
        icon: TsIcon
    },{
        label: "vitejs",
        icon: ViteIcon
    },
]

export { technologies, navLinks };