import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Talha",
  lastName: "Noman",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Engineer",
  avatar: "/images/avatar1.jpg",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/talhanoman",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/talha-noman-21924a181/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:talha@weteck.co",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Frontend Engineer  Mobile App Developer</>,
  subline: (
    <>
      I'm Talha, a frontend engineer at <InlineCode>WeTeck</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet Talha Noman, Senior Frontend Engineer at WeTeck from Pakistan.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com", // Update if you have a personal scheduling link
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Talha is a Pakistan-based Senior Frontend Engineer with over 6 years of experience in web 
        and mobile application development. He specializes in building scalable, high-performance 
        applications using Next.js, React, and React Native. Talha has a strong focus on 
        pixel-perfect UI development, API integrations, and optimizing SaaS applications. 
        He is also experienced in OpenAI integrations, chatbot development, and building 
        real-time collaboration tools.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "WeTeck",
        timeframe: "Present",
        role: "Senior Frontend Engineer",
        achievements: [
          <>
            Leading frontend development for SaaS platforms, integrating OpenAI-powered 
            features, and optimizing application performance.
          </>,
          <>
            Developed TeaConnect, a SaaS solution for restaurant businesses featuring 
            AI-powered review responses, real-time chat, and multi-platform support.
          </>,
          <>
            Built a Canva-like editor using Polotno Studio, enabling users to create 
            custom graphics with ease.
          </>,
        ],
        images: [],
      },
      {
        company: "A'stechware",
        timeframe: "Previously",
        role: "Frontend Web Developer",
        achievements: [
          <>
            Developed and maintained web applications, ensuring high performance 
            and seamless user experiences.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Self-Taught Developer",
        description: <>Gained expertise in frontend development, mobile app development, and SaaS applications.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Next.js",
        description: <>Expert in building high-performance web applications with Next.js (App & Pages Routing).</>,
        images: [],
      },
      {
        title: "React Native",
        description: <>Developing cross-platform mobile applications with a focus on smooth UX/UI.</>,
        images: [],
      },
      {
        title: "Polotno Studio",
        description: <>Built a fully functional design editor for a SaaS platform.</>,
        images: [],
      },
      {
        title: "OpenAI API",
        description: <>Integrated AI-powered features into web applications, such as AI-generated responses and chatbots.</>,
        images: [],
      },
      {
        title: "Firebase",
        description: <>Experienced in Firebase for authentication, real-time database, and cloud functions.</>,
        images: [],
      },
      {
        title: "Stock Market Analysis",
        description: <>Knowledgeable in Pakistan stock market investments and stock derivatives.</>,
        images: [],
      },
    ],
  },
};


const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/Copywhiz.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/EekoMobile.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Eeko.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/TeaConnect.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
