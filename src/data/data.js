import {FaReact, FaNode, FaLinux, FaGit, FaGithub, FaJava, FaHtml5, FaCss3, } from 'react-icons/fa';
import {SiDotnet, SiVisualstudio, SiJavascript, SiMysql} from 'react-icons/si';

const about = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non tempus neque." + 
        "Pellentesque quis vulputate est. Duis non aliquet enim. Morbi vel molestie risus, euismod blandit nibh. Vivamus molestie sem arcu, " + 
        "nec hendrerit quam lobortis eu. Etiam placerat cursus enim in sagittis. Etiam eget turpis non mi mattis fermentum. Nulla facilisi. " + 
        "Proin odio nisl, luctus non nulla eget, lobortis egestas tortor. Maecenas sem nisi, tempor eu odio a, consequat rutrum urna."
]
const skills = [
    {
        name: 'react',
        icon: <FaReact />
    },
    {
        name: 'node',
        icon: <FaNode />
    },
    {
        name: 'vs',
        icon: <SiVisualstudio />
    },
    {
        name: 'linux',
        icon: <FaLinux />
    },
    {
        name: 'git',
        icon: <FaGit />
    },
    {
        name: 'github',
        icon: <FaGithub />
    },
    {
        name: 'java',
        icon: <FaJava />
    },
    {
        name: 'javascript',
        icon: <SiJavascript/>
    },
    {
        name: 'html',
        icon: <FaHtml5 />
    },
    {
        name: 'css',
        icon: <FaCss3 />
    },
    {
        name: 'net',
        icon: <SiDotnet />
    },
    {
        name: 'mySql',
        icon: <SiMysql />
    }
]
const projects = [
    {
        name: "Portfolio",
        description: "This is the website",
        github: "https://github.com/IidaKok/portfolio",
        view: "https://iidakok.github.io/portfolio/"
    },
    {
        name: "Ninja's website",
        description: "I created this website in Web and mobile interfaces course. It's responsive and designed for kids.",
        github: "https://github.com/IidaKok/Iidakok.github.io",
        view: "https://iidakok.github.io/"
    },
    {
        name: "Mökkien hallinta",
        description: "Ohjelmistotuotannon kurssin projektityö. Minun vastuullani oli varausten hallinta. ",
        github: "https://github.com/turunena/OhjelmistotuotantoProjekti",
        view: "Ehkä linkit tiedostoihin jotka olen kirjoittanut?"
    }
]
const menuItems = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Projects", to: "/projects" },
    { text: "Contact", to: "/contact" },
];
export {skills, about, projects, menuItems}