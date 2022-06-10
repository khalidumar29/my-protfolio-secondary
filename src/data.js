//  icons
import {
  FiLinkedin,
  FiGithub,
  FiLayout,
  FiSettings,
  FiMail,
  FiMapPin,
  FiFigma,
} from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { HiPhotograph } from "react-icons/hi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.png";
import Project2 from "./assets/img/projects/p2.png";
import Project3 from "./assets/img/projects/p3.png";
import Project4 from "./assets/img/projects/p4.png";
import Project6 from "./assets/img/projects/p6.png";
import Project5 from "./assets/img/projects/p5.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// project image
import redFarmImage1 from "./assets/img/projects/Web development/redFarm1.png";
import redFarmImage2 from "./assets/img/projects/Web development/redFarm-2.png";
import redFarmImage3 from "./assets/img/projects/Web development/redFarm3.png";
import doctros_portal1 from "./assets/img/projects/Web development/doctros_portal1.png";
import doctros_portal2 from "./assets/img/projects/Web development/doctros_portal2.png";
import doctros_portal3 from "./assets/img/projects/Web development/doctros_portal3.png";
import redOnion1 from "./assets/img/projects/Web development/redOnion1.png";
import redOnion2 from "./assets/img/projects/Web development/redOnion2.png";
import redOnion3 from "./assets/img/projects/Web development/redOnion3.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/khalid-umar-5379b1217/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/khalidumar29",
  },
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/khalid.omar.50/",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Vector Design",
    category: "UI/UX design",
  },
  {
    id: "2",
    image: Project2,
    sampleImage: [redFarmImage1, redFarmImage2, redFarmImage3],
    name: "Red-Farm",
    link: [
      "https://inentory-managment.web.app/",
      "https://github.com/khalidumar29/redfarm-client",
      "https://github.com/khalidumar29/redfarm-server",
    ],
    category: "web development",
  },
  {
    id: "3",
    image: Project3,
    sampleImage: [SkillImg1, SkillImg1, SkillImg1],
    name: "Modern User Interface",
    category: "UI/UX design",
  },
  {
    id: "4",
    image: Project4,
    sampleImage: [SkillImg1, SkillImg1, SkillImg1],
    name: "Photo Editing",
    category: "Photoshop",
  },
  {
    id: "5",
    image: Project5,
    sampleImage: [doctros_portal1, doctros_portal2, doctros_portal3],
    name: "Doctors Portal",
    link: [
      "https://doctors-portal-bd23e.web.app/",
      "https://github.com/khalidumar29/doctros-portal-client",
      "https://github.com/khalidumar29/doctros-portal-server",
    ],
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    sampleImage: [redOnion1, redOnion2, redOnion3],
    name: "Red Onion",
    link: [
      "https://red-onion-d83be.web.app/",
      "https://github.com/khalidumar29/red-onion-client",
      "https://github.com/khalidumar29/red-onion-server",
    ],
    category: "web development",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "Photoshop",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiFigma />,
    name: "UI / UX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <HiPhotograph />,
    name: "Photo Editing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at khalid100umar@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Dhaka, Bangladesh",
    description: "Serving clients worldwide",
  },
];
