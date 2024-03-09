import {
  mobile,
  backend,
  creator,
  web,
  IITBBS,
  narayana,
  sshs,
  chatapp,
  booking,
  sociomedia
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ECE Student",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const education = [
  {
    title: "IIT Bhubaneswar",
    education_name: "ECE Undergraduate",
    icon: IITBBS,
    iconBg: "white",
    date: "November 2021 - April 2025",
  },
  {
    title: "Narayana Institute",
    education_name: "Class 11th-12th",
    icon: narayana,
    iconBg: "white",
    date: "April 2019 - October 2021",
  },
  {
    title: "Stepping Stones High School",
    education_name: "Class 2nd-10th",
    icon: sshs,
    iconBg: "white",
    date: "July 2010 - April 2019",
  },
];

const projects = [
  {
    name: "Socio-media",
    description:
      "Web-based platform that allows logged-in users to share and like photos with their followers and update about their personal information. Has an inbuilt chat-app",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: sociomedia,
    source_code_link: "https://github.com/virajrodge5/Socio-Media",
  },
  {
    name: "Booking App",
    description:
      "An airbnb inspired places booking app where logged in users can list their own places complete with place details and other users can book places according to the calendar.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: booking,
    source_code_link: "https://github.com/virajrodge5/airbnb-clone",
  },
  {
    name: "Chat App",
    description:
      "A basic chat application with google authentication that lets one or more users logged in a particular chat-room text each other.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/virajrodge5/chat-app",
  },
];

export { services, education, projects };