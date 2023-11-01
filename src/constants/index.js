import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    starbucks,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full-Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Bachelor of Engineering",
      company_name: "Dr. Ambedkar Institute of Technology",
      icon: starbucks,
      iconBg: "#383E56",
      date: "December 2020 - current",
      points:"Computer Science",
      cgpa:"CGPA-8.75",
    },
    {
      title: "Pre University Education(12TH)",
      company_name: "Poorna Pre University College",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2017 - march 2020",
      points:"Science",
      cgpa:"Percentage-86%",
    },
    {
      title: "SSLC(10TH)",
      company_name: "K.E. Boards English Medium School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "December 2016 - march 2017",
      cgpa:"percentage-88%"
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "HTML, CSS, and Javascript for Web Developers",
      name: "Coursera",
   },
   {
    testimonial:
      "Python Data Structures University of Michigan",
    name1: "Coursera",
 },{
  testimonial:
    "The Full Stack by Meta",
  name2: "Coursera",
},
  ];
  
  const projects = [
    {
      name: "Online Pet Management ",
      description:
      "Technologies Used: Ajax, Node.js, Express, MongoDB. Designed and implemented a robust login and signup system using AWT tokens, ensuring a highly secure authentication process. Developed an intuitive admin dashboard enabling seamless CRUD (Create, Read, Update, Delete) operations for managing pets and items with ease.",
      deploylink:"https://online-p1.onrender.com/",
        tags: [
        {
          name: "Ajax",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/cruisershiva/pet-management",
    },
    {
      name: "Messenger App",
      description:"Technologies Used:Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher. Group chats and one-on-one messaging,Message attachments and file sharing,Message read receipts and Online/offline user status. How to fetch data in server React components by directly accessing the database. Handling relations between Server and Child components in a real- time environment"
      ,
      deploylink:"https://messenger-app-bay.vercel.app/",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "pink-text-gradient",
        },
        {
          name: "pusher",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/cruisershiva/Messenger-app",
    },
    {
      name: "Smart Parking system",
      description:"In this project, technologies such as HTML, CSS, Node.js, Firebase, and Shell scripts are used to create a web application that provides real-time data communication through a COM Port. The application allows users to monitor and access real-time vacancy information for parking slots over the web, enhancing convenience and efficiency in parking management.",
      deploylink:"https://rajkeshav1410.github.io/Smart-parking/"
      ,tags: [
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
        {
          name: "iot",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/cruisershiva/ml",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };