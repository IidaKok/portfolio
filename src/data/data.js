import {FaReact, FaNode, FaLinux, FaGit, FaGithub, FaJava, FaHtml5, FaCss3, FaBootstrap, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import {SiDotnet, SiVisualstudio, SiJavascript, SiMysql, SiIntellijidea, SiVirtualbox, SiJquery} from 'react-icons/si';
import portfolio from "../images/portfolio_picture.png";
import ninja from "../images/ninjas_picture.png";
import project from "../images/project.PNG";

const about = [
    "My name is Iida Kokkonen and I am 26 years old software engineering student from Kuopio. I enjoy creating user-friendly websites and applications.",
    "As a person, I am responsible and conscientious. I am excited to develop my skills and learn new things.",
    "When I have some free time, I enjoy lying on a couch, knitting and watching Netflix."
]
const aboutSkills = [
    "I have studied at Savonia University of Applied Sciences for 2,5 years and gained experience in c#, java and javascript languages. Also sql queries, html, css, .net and react have become familiar.",
      "I have graduated before as an Ict Technican in 2019. From my earlier degree I have experience, for example, experiance on the server side, system support, telecommunications equipment installations and cabling.",
      "I also have over two years of experience in customer service."
]
const skills = [
    {
        name: 'React.js',
        icon: <FaReact />
    },
    {
        name: 'Node.js',
        icon: <FaNode />
    },
    {
        name: 'Visual Studio',
        icon: <SiVisualstudio />
    },
    {
        name: 'Linux',
        icon: <FaLinux />
    },
    {
        name: 'Git',
        icon: <FaGit />
    },
    {
        name: 'Github',
        icon: <FaGithub />
    },
    {
        name: 'Java',
        icon: <FaJava />
    },
    {
        name: 'Javascript',
        icon: <SiJavascript/>
    },
    {
        name: 'Html',
        icon: <FaHtml5 />
    },
    {
        name: 'Css',
        icon: <FaCss3 />
    },
    {
        name: 'Dotnet',
        icon: <SiDotnet />
    },
    {
        name: 'MySql',
        icon: <SiMysql />
    },
    {
        name: 'Intellj',
        icon: <SiIntellijidea/>
    },
    {
        name: 'Virtualbox',
        icon: <SiVirtualbox/>
    },
    {
        name: 'Jquery',
        icon: <SiJquery/>
    },
    {
        name: 'Bootstrap', 
        icon: <FaBootstrap/>
    }
]
const projects = [
    {
        name: "Portfolio",
        image: portfolio,
        description: "I wanted to create a project that would show my skills and learn more about how to use react.",
        languages: ["Javascript", "Html", "Css", "React"],
        github: "https://github.com/IidaKok/portfolio"
    },
    {
        name: "Ninja's website",
        image: ninja,
        description: "I created this website in Web and mobile interfaces course. It's responsive and designed for kids.",
        languages: ["Html", "Css"],
        github: "https://github.com/IidaKok/Iidakok.github.io"
    },
    {
        name: "Management of cabin reservations",
        image: project,
        description: "Group work for the Software Engineering course. I recommend taking a look at the frmVaraukset.cs and frmPalveluidenRaportointi.cs files",
        languages: ["C#", "Sql"],
        github: "https://github.com/turunena/OhjelmistotuotantoProjekti"
    }
]
const menuItems = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Projects", to: "/projects" },
    { text: "Contact", to: "/contact" },
];
const contactInfo = [{
    text: "Send an email",
    name: "Email",
    icon: <FaEnvelope />,
    link: "mailto:iida.kokkonen@edu.savonia.fi"
},
{
    text: "Connect in LinkedIn",
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/iida-kokkonen-10b43423b/"
}
]
export {skills, about, aboutSkills, projects, menuItems, contactInfo}