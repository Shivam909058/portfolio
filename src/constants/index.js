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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
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
    title: "Machine Learning Engineer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

let tensorflow = "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg";
let keras = "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg";
let postgresql = "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg";
let cpp = "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg";
let c_sharp = "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg";
let opencv = "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg";
// Replace this URL with a valid one if the current one is broken
//let streamlit = "https://upload.wikimedia.org/wikipedia/commons/8/84/Streamlit_logo.png";

const technologies = [
  {
    name: "Streamlit",
    icon: git,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C#",
    icon: c_sharp,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Keras",
    icon: keras,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Google Developer Student Club Member",
    company_name: "Google Developer Student Club",
    icon: meta,  // Replace with appropriate icon
    iconBg: "#4285F4",
    date: "Sept 2022 - Present",
    points: [
      "Collaborating on projects related to machine learning and deep learning, contributing to solutions for real-world problems.",
      "Participating in workshops, hackathons, and community events to enhance my skills in AI, ML, and DL technologies.",
      "Mentoring fellow students on the use of machine learning frameworks like TensorFlow and PyTorch.",
      "Developing and deploying web applications that incorporate AI models as part of community-driven projects.",
    ],
  },
  {
    title: "Machine Learning Engineer (Freelance)",
    company_name: "Freelance",
    icon: tesla,  // Replace with appropriate icon
    iconBg: "#383E56",
    date: "March 2023 - June 2023",
    points: [
      "Built and deployed machine learning models to solve predictive analytics problems for clients.",
      "Collaborated with clients and peers to design and implement scalable, efficient solutions using Python, TensorFlow, and PyTorch.",
      "Applied deep learning techniques for image recognition, natural language processing, and time series forecasting projects.",
      "Ensured model optimization and performed hyperparameter tuning to achieve high accuracy and performance.",
    ],
  },
  {
    title: "Open-Source Contributor",
    company_name: "GitHub",
    icon: starbucks,  // Replace with appropriate icon
    iconBg: "#333333",
    date: "June 2022 - Present",
    points: [
      "Contributed to open-source machine learning and deep learning projects, enhancing AI models for diverse applications.",
      "Collaborated with global developers to build scalable and efficient ML/DL solutions for community projects.",
      "Reviewed code, optimized algorithms, and participated in discussions on improving performance and scalability.",
      "Actively involved in bug fixes, feature enhancements, and mentoring others in the open-source community.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
        "I was amazed by how effectively Shivam applied deep learning techniques to our data. Their work significantly improved our model's accuracy.",
    name: "Emily Carter",
    designation: "Data Scientist",
    company: "Tech Innovations Inc.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
        "Shivam's expertise in machine learning was evident in the way they developed our predictive model. It exceeded our expectations and delivered outstanding results.",
    name: "Michael Johnson",
    designation: "Machine Learning Engineer",
    company: "FutureTech Labs",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
        "Shivam's ability to integrate NLP solutions into our application was impressive. Their work enhanced our user experience and brought great value to our project.",
    name: "Sophia Martinez",
    designation: "NLP Specialist",
    company: "AI Solutions Corp.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


// Global Image Variables
let langchainImage = "https://via.placeholder.com/150?text=LangChain+QA+Chatbot"; // Placeholder for LangChain-based QA Chatbot
let researchPaperImage = "https://via.placeholder.com/150?text=Research+Paper+Analysis"; // Placeholder for Research Paper Analysis Tool
let predictiveMaintenanceImage = "https://via.placeholder.com/150?text=Predictive+Maintenance"; // Placeholder for Predictive Maintenance System

const projects = [
  {
    name: "LangChain-based QA Chatbot",
    description:
        "An advanced QA chatbot built with LangChain that allows users to upload PDFs or text documents and query answers from the content. It provides a robust solution for extracting information from unstructured data.",
    tags: [
      {
        name: "langchain",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: langchainImage,
    source_code_link: "https://github.com/your-repo/langchain-qa-chatbot",
  },
  {
    name: "Research Paper Analysis Tool",
    description:
        "A tool designed for analyzing research papers by simply entering the arXiv paper number. It provides summaries and allows users to ask questions about the paper's content, enhancing research efficiency.",
    tags: [
      {
        name: "arxiv",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: researchPaperImage,
    source_code_link: "https://github.com/your-repo/research-paper-analysis-tool",
  },
  {
    name: "Predictive Maintenance System",
    description:
        "A predictive maintenance system for industrial equipment that leverages machine learning algorithms to predict failures before they occur. The system analyzes sensor data to forecast potential breakdowns and optimize maintenance schedules.",
    tags: [
      {
        name: "machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: predictiveMaintenanceImage,
    source_code_link: "https://github.com/your-repo/predictive-maintenance-system",
  },
];

export { services, technologies, experiences, testimonials, projects };
