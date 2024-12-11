import {
    mobile,
    backend,
    creator,
    web,
    python,
    java,
    c,
    sql,
    javascript,
    haskell,
    reactjs,
    html,
    css,
    git,
    linux,
    wmg,
    bloomberg,
    bofa,
    wfs,
    crisiscompass,
    quizzygoose,
} from "../assets";
  
export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "tech",
      title: "Tech",
    },
    {
      id: "projects",
      title: "Project",
    },
    {
      id: "awards",
      title: "Awards",
    },    
];
  
const services = [
    {
      title: "Software Engineering",
      icon: web,
    },
    {
      title: "Data Engineering",
      icon: mobile,
    },
    {
      title: "Web Development",
      icon: backend,
    },
    {
      title: "AI/ML Integration",
      icon: creator,
    },
];
  
const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Haskell",
      icon: haskell,
    },
    {
      name: "ReactJS",
      icon: reactjs,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name : "CSS",
      icon: css,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Linux",
      icon: linux,
    },
];

const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Warwick Manufacturing Group",
      icon: wmg,
      iconBg: "#E6DEDD",
      date: "June 2024 - September 2024",
      points: [
        "Cleaned and analysed 600+ test results using Python Pandas and NumPy, resolving duplicates, missing values, and outliers with IQR to ensure data quality",
        "Developed a report generator using Matplotlib for data visualisation and ReportLab for formatting, delivering reports for ~150 students",
        "Engaged with five stakeholders to refine reports based on feedback, exceeded expectations, and ensured transparency through Git version control",
        "Designed a 3NF database using Python’s PostgreSQL, enabling result comparisons and improving student report quality",
        "Built an interface using Qualtrics API, FastAPI, and HTTPX to dynamically process survey responses, trigger data functions, and automate report generation with an SMTP-based email system",
        "Configured software to run on a Linux server",
      ],
    },
    {
      title: "Data Insight Week",
      company_name: "Bloomberg",
      icon: bloomberg,
      iconBg: "#E6DEDD",
      date: "July 2024",
      points: [
        "Led an interdisciplinary team of 7, delegating tasks effectively, and delivered a successful presentation to ~40 attendees on a solution to map M&A deals geographically",
        "Developed a demo website using Python, Pandas, Flask, and Bootstrap to clean and analyze M&A transaction spreadsheets. The proof of concept reinforced the presentation and met stakeholder expectations",
      ],
    },
    {
      title: "Spring Week",
      company_name: "Bank of America",
      icon: bofa,
      iconBg: "#E6DEDD",
      date: "April 2024",
      points: [
        "Analysed 1,500 rows of data using Excel functions and visualized insights with pivot tables in an AmplifyME tech simulation, collaborating in a team of 2",
        "Engaged with industry leaders to enhance fintech commercial awareness, driving ambition to further develop skills and explore technology",
      ],
    },
];
  
const testimonials = [
    {
      testimonial: "Bloomberg Bursary",
      name: "2024",
      designation: "Received financial support due to academics.",
      company: "",
      image: "",
    },
    {
      testimonial: "Warwick Hackathon Smartest AI Agent",
      name: "2024",
      designation: "Won Hackathon Prize.",
      company: "",
      image: "",
    },
    {
      testimonial: "Sir Thomas White Grant",
      name: "2024, 2 x 2023, 2021",
      designation: "Received grants due to academics",
      company: "",
      image: "",
    },
    {
      testimonial: "Beckett's and Sargeant Grant",
      name: "2024",
      designation: "Received grant due to academics",
      company: "",
      image: "",
    },
    {
      testimonial: "Harvard Prize Book",
      name: "2023",
      designation: "Recognised by Harvard's UK Club for academic excellence.",
      company: "",
      image: "",
    },
    {
      testimonial: "Warwick University Scholar",
      name: "2023",
      designation: "Scholarship to half tuition fees.",
      company: "",
      image: "",
    },
];
  
const projects = [
    {
      name: "Crisis Compass",
      description:
        "Disaster relief platform to connect individuals in need of resources with those who can donate. Developed during Warwick's 24-hour Hackathon by a team of 4, earning the Smartest AI Agent award out of 32 teams.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "sqlite",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "fetch-ai",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
      ],
      image: crisiscompass,
      source_code_link: "https://github.com/toluwalase104/warwick_hack_2024",
    },
    {
      name: "WFS Website",
      description:
        "Scalable and user-focused platform developed to provide career resources for a society. In a team of 2, the project emphasises responsive design, SEO, and accessibility.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "google-drive-api",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
      ],
      image: wfs,
      source_code_link: "https://github.com/wfsocieties/Warwick-Finance-Societies-WFS-Website",
    },
    {
      name: "Quizzy Goose",
      description:
        "AI-driven quiz generation platform for students to address attention span and instant gratification challenges. Programmed during Aston's 24-hour Hackathon by a team of 4.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "gemini-api",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
      ],
      image: quizzygoose,
      source_code_link: "https://github.com/JonathanLu2005/AstonHackathon",
    },
];
  
export { services, technologies, experiences, testimonials, projects };