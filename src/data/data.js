import {FaReact, FaNode, FaLinux, FaGit, FaGithub, FaJava, FaHtml5, FaCss3, FaBootstrap, FaLinkedin, FaEnvelope, FaPython} from 'react-icons/fa';
import {SiDotnet, SiVisualstudio, SiJavascript, SiMysql, SiIntellijidea, SiVirtualbox, SiJquery} from 'react-icons/si';
import portfolio from "../images/portfolio_picture.png";
import ninja from "../images/ninjas_picture.png";
import project from "../images/project.PNG";
import project2 from "../images/project2.PNG";
import portfoliovideo from "../images/portfoliovideo.mp4";
import ninjansivutvideo from "../images/ninjansivutvideo.mp4";
import project1video from "../images/project1video.mp4";
import project2video from "../images/project2video.mp4";
import calculatorvideo from "../images/calculatorvideo.mp4";

const about = [
    "I'm a 27 years old Software Engineering student from Kuopio. I enjoy creating user-friendly websites and applications.",
    "As a person, I'm responsible and conscientious. I'm excited to develop my skills and learn new things.",
    "On my free time, I like lying on a couch, knitting and watching movies."
]
const aboutSkills = [
    "I have studied at Savonia University of Applied Sciences for over 3 years and gained experience in C#, Java, JavaScript and Python languages. Also SQL queries, Html, CSS, .NET, React.js, Node.js, database management and agile methods in Azure have become familiar to me.",
      "I have graduated before as an Ict Technician in 2019. From my earlier degree I have experience, for example, on the server side, system support, telecommunications equipment installations and cabling.",
      "I also have over two years experience in customer service."
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
        name: 'Intellij IDEA',
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
    },
    {
        name: 'Python',
        icon: <FaPython/>
    }
]
const projects = [
    {
        name: "Calculator app",
        video: calculatorvideo,
        description: "A simple calculator app for Android.",
        languages: ["Java"],
        github: "https://github.com/IidaKok/MyCalculator"
    },
    {
        name: "Book archive",
        image: project2,
        video: project2video,
        description: "Software Engineer 2 course group project, our objective was to develop a book archive for collectors of old books. My specific role involved creating the registration and login functionalities within the program.",
        languages: ["Javascript", "Html", "Css", "React", "Node", "Sql"],
        github: "https://github.com/IidaKok/groupb-project"
    },
    {
        name: "Portfolio",
        image: portfolio,
        video: portfoliovideo,
        description: "I created this project to further my knowledge and understanding of React.",
        languages: ["Javascript", "Html", "Css", "React"],
        github: "https://github.com/IidaKok/portfolio"
    },
    {
        name: "Management of cabin reservations",
        image: project,
        video: project1video,
        description: "Software Production 1 course group project, the task was to create an application for managing holiday cottage bookings according to the given request for proposal. My responsibility involved managing cabin reservations and reporting the reserved accommodations and services.",
        languages: ["C#", "Sql"],
        github: "https://github.com/IidaKok/Ohjelmistotuotanto1"
    },
    {
        name: "Ninja's website",
        image: ninja,
        video: ninjansivutvideo,
        description: "A website made in the Web and mobile interfaces course that is responsive and designed for children.",
        languages: ["Html", "Css"],
        github: "https://github.com/IidaKok/Iidakok.github.io"
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
    link: "https://www.linkedin.com/in/iida-kokkonen/"
}
]
export {skills, about, aboutSkills, projects, menuItems, contactInfo}