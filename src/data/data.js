import {FaReact, FaNode, FaLinux, FaGit, FaGithub, FaJava, FaHtml5, FaCss3, FaBootstrap, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import {SiDotnet, SiVisualstudio, SiJavascript, SiMysql, SiIntellijidea, SiVirtualbox, SiJquery} from 'react-icons/si';
import portfolio from "../images/portfolio_picture.png";
import ninja from "../images/ninjas_picture.png";
import project from "../images/project.PNG";

const about = [
    "I'm a 26 years old Software Engineering student from Kuopio. I enjoy creating user-friendly websites and applications.",
    "As a person, I'm responsible and conscientious. I'm excited to develop my skills and learn new things.",
    "On my free time, I like lying on a couch, knitting and watching movies."
]
const aboutSkills = [
    "I have studied at Savonia University of Applied Sciences for 2,5 years and gained experience in C#, Java and JavaScript languages. Also SQL queries, Html, CSS, .NET and React.js have become familiar to me.",
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
        description: "Group work for the Software Engineering course. I recommend taking a look at the frmVaraukset.cs and frmPalveluidenRaportointi.cs files.",
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
    link: "https://www.linkedin.com/in/iida-kokkonen/"
}
]
export {skills, about, aboutSkills, projects, menuItems, contactInfo}