import React from "react";
import './Experience.css'; // Import the CSS file
// At the top of your file
import gribonLogo from '../assets/griboncompany_logo.jpg';
import lonzaLogo from '../assets/Lonza.jpg';
import unhLogo from '../assets/unh.png';
import accentureLogo from '../assets/Accenture.png';
import cbitLogo from '../assets/cbit.png';

// Updated Experience and Education data
const timelineData = [
  {
    title: "AI & Data Science Consultant",
    company: "GRIBON & COMPANY",
    logo: gribonLogo, // Add university logo
    duration: "Mar 2025 - Present",
    description:
      "Architected a conversational AI agent on GCP to ingest and analyze Zoom/Meet transcripts and SurveyMonkey data, reducing manual synthesis time by 90%, and optimized ETL pipelines and fine-tuned LLMs, improving data processing efficiency by 40% and model accuracy by 30-40%",
    type: "experience",
  },
  {
    title: "Business Intelligence Analyst",
    institution: "Lonza Biologics Inc.",
    logo: lonzaLogo, // Add university logo
    duration: "Oct 2024 - Feb 2025",
    description:
      "Built predictive models in Python using logistic regression and decision trees, reducing rejection rates by 25%, and optimized SQL pipelines, improving data reliability and reducing ETL time by 17%; automated Looker dashboard deployment, cutting errors by 75%, and delivered dashboards ahead of schedule, enhancing operational reviews by 50%. Conducted statistical analysis to improve batch consistency by 15%, and automated data ingestion processes, saving 24+ hours per week",
    type: "experience",
  },
  {
    title: "Master of Science in Business Statistics",
    institution: "University of New Hampshire",
    logo: unhLogo, // Add university logo
    duration: "Aug 2023 - Sep 2024",
    description:
      "Focused on Business Intelligence, Statistical Learning, Time Series Analysis, and Optimization Methods. Graduated with a GPA of 3.8/4.",
    type: "education",
  },
  {
    title: "Data Analyst",
    company: "Accenture",
    logo: accentureLogo, // Add logo path
    duration: "Feb 2021 - July 2023",
    description:
      "Developed Tableau dashboards to visualize KPIs, reducing operational costs by 20%, and built a CPLEX model in AMPL to optimize routes, cutting transport costs by 7%. Forecasted product demand using ML in Python, improving accuracy by 15%, and automated 10+ data processes, speeding up reporting and reducing errors. Built and optimized SQL scripts for data cleansing and aggregation, improving downstream data quality by 30%",
    type: "experience",
  },
  {
    title: "Bachelor of Engineering in Electronics and Communication",
    institution: "CBIT, Hyderabad",
    logo: cbitLogo, // Add college logo
    duration: "July 2016 - Sep 2020",
    description:
      "Specialized in Data Structures, Machine Learning, and Database Management Systems",
    type: "education",
  },
];

const TimelineItem = ({ data, index }) => (
  <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
    <div className="timeline-content">
      <img
        src={data.logo}
        alt={`${data.company || data.institution} logo`}
        className="company-logo"
      />
      <h3 className="experience-title">{data.title}</h3>
      <h4 className="experience-company">
        {data.company || data.institution}
      </h4>
      <p className="experience-duration">{data.duration}</p>
      <p className="experience-description">{data.description}</p>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience & Education</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} data={item} index={index} />
        ))}
        <div className="timeline-line"></div> {/* Vertical line */}
      </div>
    </section>
  );
};

export default Experience;
