import user1 from "../assets/Pictures//Ellipse 2664.png";
import project1 from "../assets/Pictures/image (2).png";
import project2 from "../assets/Pictures/image.png";
import project3 from "../assets/Pictures/image 771.png";
import {
  FaBootstrap,
  FaCss3,
  FaFacebook,
  FaGit,
  FaJs,
  FaNodeJs,
  FaReact,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";

export const intro =
  "I’m a passionate front-end developer skilled in HTML, CSS, JavaScript, React, and Tailwind CSS, with a focus on creating responsive and visually engaging web applications.";

export const dedication =
  "I’m dedicated to delivering seamless user experiences, bringing attention to detail and a commitment to performance in every project.";

export const approach =
  "By working closely with clients, I ensure that each interface is both user-friendly and impactful, turning ideas into high-quality digital solutions. Constantly exploring new technologies and design trends, I aim to stay at the cutting edge of front-end development.";

export const testimonials = [
  {
    name: "flora sheen",
    profile: user1,
    comment:
      "I’m thrilled with the final product! It was delivered on time and beyond my expectations",
    profession: "designer",
  },
  {
    name: "flora sheen",
    profile: user1,
    comment:
      "I’m thrilled with the final product! It was delivered on time and beyond my expectations",
    profession: "developer",
  },
  {
    name: "flora sheen",
    profile: user1,
    comment:
      "I’m thrilled with the final product! It was delivered on time and beyond my expectations",
    profession: "developer",
  },
];

export const projects = [
  {
    id: 1,
    title: "Weather App",
    img: project1,
    description:
      "A user-friendly weather app that provides up-to-date weather forecasts and real-time climate data based on user location. This project integrates OpenWeatherMap API to display information on temperature, humidity, wind speed, and forecast for the upcoming week. It also features a search functionality to find weather data for any city worldwide, with a responsive design for optimal viewing on both mobile and desktop.",
    link: "https://playmyquiz.netlify.app",
  },
  {
    id: 2,
    title: "E-commerce Website",
    img: project2,
    description:
      "An e-commerce platform designed for small businesses, featuring a clean UI for browsing products, adding items to the cart, and checking out. The project includes a secure login system, product filtering options, and a recommendation engine to suggest items based on user preferences. Payment integration with Stripe API enables secure transactions. The website is optimized for SEO and includes a content management system (CMS) for easy product updates.",
    link: "https://blackboast.netlify.app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    img: project3,
    description:
      " A personal portfolio Clone site to showcase projects, skills, and professional experience. The site includes sections for completed projects, a blog, contact information, and a downloadable resume. Designed with a modern, minimalist aesthetic, this responsive website is built with React and CSS animations to enhance user experience. It also features a contact form with email integration to connect directly with potential clients or employers.",
    link: "https://musfiqurrhaman.netlify.app",
  },
];

export const Gmail = "musfiqurrahman6@gmail.com";

export const socialIcons = [
  { icon: FaFacebook, link: "https://www.facebook.com/musfiqur.rhaman.3994/" },
  { icon: FaReddit, link: "https://www.reddit.com/user/Lucky_Decision9183/" },
  { icon: FaTwitter, link: "https://x.com/MusfiqurRhaman6" },
  { icon: IoLogoDiscord, link: "https://discord.com/" },
];

export const sections = [
  { id: "about me", targetId: "about-me" },
  { id: "skills", targetId: "skills" },
  { id: "projects", targetId: "projects" },
  { id: "contact me", targetId: "contact-me" },
];

export const skills = [
  { icon: FaReact, label: "React js" },
  { icon: RiTailwindCssFill, label: "tailwindcss" },
  { icon: TbBrandFramerMotion, label: "framer motion" },
  { icon: FaBootstrap, label: "bootstrap" },
  { icon: FaJs, label: "javascript" },
  { icon: FaCss3, label: "css3" },
  { icon: FaGit, label: "git" },
  { icon: RiNextjsFill, label: "next js" },
  { icon: FaNodeJs, label: "node js" },
  { icon: SiMongodb, label: "mongodb" },
];

// variants
export const itemVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};
export const itemVariant2 = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export const textUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const cardUpDown = {
  initial: { y: 0 },
  animate: (idx) => {
    const movement = idx % 2 === 0 ? [0, 10, 0] : [0, -10, 0];

    const duration = 2.5;
    const ease = idx % 2 === 0 ? "easeOut" : "easeInOut";

    return {
      y: movement,
      transition: {
        duration: duration,
        ease: ease,
        repeat: Infinity,
        repeatType: "reverse",
      },
    };
  },
};

export const buttonVariants = {
  initial: { scale: 1 },
  tap: { scale: 0.9 },
  hover: {
    backgroundColor: "#ffffff",
    border: "1px solid #000000",
    color: "#000000",
  },
};

export const floatAnimation = {
  initial: { y: 0 },
  animate: (idx) => {
    let yValues;
    switch (idx) {
      case 0:
        yValues = [-5, 5];
        break;
      case 1:
        yValues = [-0, 0];
        break;
      case 2:
        yValues = [-5, 5];
        break;
      case 3:
        yValues = [-0, 0];
        break;
      case 4:
        yValues = [-5, 5];
        break;
      case 5:
        yValues = [0, -0];
        break;
      case 6:
        yValues = [-5, 5];
        break;
      case 7:
        yValues = [-0, 0];
        break;
      case 8:
        yValues = [-5, 5];
        break;
      case 9:
        yValues = [-0, 0];
        break;
      default:
        yValues = [5, 5];
    }

    return {
      y: yValues,
      transition: {
        duration: 2,
        delay: idx * Math.floor(Math.random()),
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    };
  },
};
