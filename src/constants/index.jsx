// Import necessary assets and icons
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaReddit,
} from "react-icons/fa6";


import awslogo from "../assets/aws.svg";
import tableaulogo from "../assets/Tableau.svg";
import pythonlogo from "../assets/python.svg";
import rlogo from "../assets/rstudio.svg";
import sql from "../assets/postgresql.svg";
import mongodb from "../assets/Mongodb.svg";
import powerbiLogo from "../assets/powerbi-logo.svg";

import image1 from "../assets/project1.png";
import image2 from "../assets/Project2.png";
import image3 from "../assets/dollar.png";
import image4 from "../assets/project4.png";
import image5 from "../assets/project5.png";
import image6 from "../assets/project6.png";
import image7 from "../assets/project7.png";
import image8 from "../assets/project8.png";
import image9 from "../assets/project9.png";
import image10 from "../assets/project10.png";

import cert1 from "../assets/microsoft_cert.png";
import cert2 from "../assets/google_cert.png";
import cert3 from "../assets/hackerrank.png";
import cert4 from "../assets/pagerduty.png";
import cert5 from "../assets/atlassian.png";

// Updated NAVIGATION_LINKS to remove Education
export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" }, // Only Experience here
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: (
    <span style={{ fontFamily: "", fontSize: "3rem", color: "#FFFFFF", fontWeight: "700" }}>
      Sathish Komire
    </span>
  ),
  info: [
    "Data-Driven Professional | Expertise in Business Statistics, Analytics, and Machine Learning with 3+ Years of Experience.",
  ],
};



export const ABOUT = {
  text1:
    "I turn data into stories and solutions with a dash of creativity and innovation!",
  text2: "Hello! I'm Sathish Komire, and I love finding stories hidden in big data.",
};

// Projects section remains unchanged
export const PROJECTS = [
  {
    title: "Airbnb booking rate Prediction and Causal Inference",
    subtitle:
      "An XGBoost model with 82.8% AUC to predict Airbnb booking rates in LA, followed by causal inference analysis identifying key factors like guest capacity, pricing, and host response rate driving higher bookings",
    image: image1,
    link: "https://github.com/mrkomire/Big-Data"
  },
  {
    title: "Email Classification",
    subtitle: "Executed text preprocessing and dimensionality reduction to build a spam email filter using a Random Forest model, achieving an MSE of 0.0307",
    image: image2,
  },
  {
    title: "Stochastic Volatility Forecasting for USDINR",
    subtitle: "A Bayesian volatility model using the 'stochvol' package in R, tuning prior distribution parameters to predict future volatility based on historical data",
    image: image3,
    link: "https://github.com/mrkomire/Forex_USDINR",
  },
  {
    title: "Commodity Portfolio Optimization",
    subtitle:
      "A model using the ‘cvxpy’ solver package in Jupyter Notebook using Python and solver in Excel to optimize a commodity portfolio, achieving 117.3% expected returns with 2% risk",
    image: image4,
  },
  {
    title: "Abalone Classification",
    image: image5,
    link: "https://github.com/mrkomire/Abalone",
  },
  {
    title: "IMDB Top 250 Movies Analysis",
    subtitle:
      "Leveraged BeautifulSoup, NumPy, Pandas, Matplotlib, Seaborn, and NLTK for web scraping and data analysis, identifying 150 minutes as the optimal movie duration for maximizing viewer engagement",
    image: image6,
  },
  {
    title: "Teacher Certification Insights",
    subtitle:
      "Applied hypothesis testing and regression analysis in R to model teacher certification data, revealing a weak negative correlation between student enrollment, staff count, and certification rates",
    image: image7,
  },
  {
    title: "TED Talks Analysis",
    subtitle:
      "Utilized Power Query, Power BI, R in Google Colab, and Tableau to analyze trends from 2006 to 2017, uncovering a preference for talks lasting 10-20 minutes",
    image: image8,
    link: "https://github.com/mrkomire/TED"
  },
  {
    title: "MMA Fight Analysis",
    subtitle:
      "Used MySQL on Amazon RDS and Power BI to analyze MMA fight data, identifying key patterns like fighters with two consecutive wins being more likely to lose their next fight",
    image: image9,
  },
  {
    title: "CNN for image classification",
    subtitle:
      "Early Detection of diabetic retinopathy in diabteic patients by inputting the retinal images",
    image: image10,
  },
  // More projects...
];

// Skills section remains unchanged
export const SKILLS = [
  {
    icon: <img src={pythonlogo} alt="Python Logo" className="w-12 h-12 lg:w-16 lg:h-16" />,
    name: "Python",
    experience: "3+ years",
  },
  {
    icon: <img src={sql} alt="SQL Logo" className="w-12 h-12 lg:w-16 lg:h-16" />,
    name: "SQL",
    experience: "3+ years",
  },
  {
    icon: <img src={powerbiLogo} alt="PowerBI Logo" className="w-12 h-12 lg:w-16 lg:h-16" />,
    name: "PowerBI",
    experience: "2+ years",
  },
  {
    icon: <img src={awslogo} alt="AWS Logo" className="w-12 h-12 lg:w-16 lg:h-16" />,
    name: "AWS",
    experience: "1+ years",
  },
  {
    icon: <img src={rlogo} alt="R Logo" className="w-12 h-12 lg:w-16 lg:h-16" />,
    name: "R",
    experience: "3+ years",
  },
  {
    icon: <img src={tableaulogo} alt="Tableau Logo" className="w-12 h-12 lg:w-16 lg:h-16" />,
    name: "Tableau",
    experience: "3+ years",
  },
  {
    icon: <img src={mongodb} alt="MongoDB Logo" className="w-12 h-12 lg:w-16 lg:h-16" />,
    name: "MongoDB",
    experience: "3+ years",
  },
];

// Updated to keep only the Experience section
export const EXPERIENCE = [
  {
    title: "Application Development Analyst",
    company: "Accenture",
    duration: "2021 - 2023",
    description:
      "Improved energy consumption forecasting accuracy by 11% using XGBoost, optimized supply chain operations reducing transportation costs by 7%, automated 20+ processes with a 99% success rate using Blue Prism, and developed Power BI dashboards reducing operational costs by 20% for Total Energies",
  },
  {
    title: "Front-End Developer Intern",
    company: "Creative Solutions Ltd.",
    duration: "2021 - 2022",
    description:
      "Worked on improving user interfaces and enhancing UX for a variety of client projects. Utilized React and Redux to build interactive components and optimize performance.",
  },
];

// Updated certifications section
export const CERTIFICATIONS = [
  {
    name: "Microsoft Data Analytics Professional",
    issuingOrganization: "Microsoft",
    issueDate: "August 2024",
    icon: cert1,
    link: "https://www.linkedin.com/learning/certificates/5d91fe163f3c87ad97c4b9d4f01bf2c4f96eb3d07a7519b8a919ef34bb7a78c1?u=127479866"
  },
  {
    name: "Google Cloud Data Analytics Professional",
    issuingOrganization: "Google",
    issueDate: "September 2024",
    icon: cert2,
    link: "https://www.credly.com/badges/9214866d-9171-442f-bd50-6f7648641955/public_url"
  },
  {
    name: "HackerRank SQL Advanced",
    issuingOrganization: "HackerRank",
    issueDate: "September 2024",
    icon: cert3,
    link: "https://www.hackerrank.com/certificates/7c0ea2e8eeb9"
  },
  {
    name: "PagerDuty DevOps Professional",
    issuingOrganization: "PagerDuty",
    issueDate: "Aug 2024",
    icon: cert4,
    link:"https://www.hackerrank.com/certificates/7c0ea2e8eeb9"
  },
  {
    name: "Atlassian Agile Project Management Professional",
    issuingOrganization: "Atlassian",
    issueDate: "April 2024",
    icon: cert5,
    link: "https://www.linkedin.com/learning/certificates/0228653ddf50d02ae45ac810794bf9c99d2aeacb1dc20807d3a4e9d7bf4b4e2c?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BpjAzQasFQ%2BaSlILimytd2Q%3D%3D"
  },
];

// Updated Social Media Links
export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/mrkomire/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/sathish-komire-b5980b160/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://support.discord.com/hc/en-us/profiles/26385898744087",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.reddit.com/user/Training-South1894/",
    icon: <FaReddit fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/mr_komire",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
];
