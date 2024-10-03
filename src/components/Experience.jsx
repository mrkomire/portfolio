import React from "react";
import './Experience.css'; // Import the CSS file

// Updated Experience and Education data
const timelineData = [
  {
    title: "Master of Science in Business Statistics",
    institution: "University of New Hampshire",
    logo: "src/assets/unh.png", // Add university logo
    duration: "Aug 2023 - Sep 2024",
    description:
      "Focused on Business Intelligence, Statistical Learning, Time Series Analysis, and Optimization Methods. Graduated with a GPA of 3.8/4.",
    type: "education",
  },
  {
    title: "Application Development Analyst",
    company: "Accenture",
    logo: "src/assets/Accenture.png", // Add logo path
    duration: "Feb 2021 - July 2023",
    description:
      "Collaborated on building a Gradient Boost model in Python (improving energy consumption forecasting accuracy by 11%), handled data preprocessing, hyperparameter tuning, and real-time integration for Total Energies, designed a Power BI dashboard (reducing operational costs by 20%), developed an optimization model in AMPL (minimizing transportation costs by 7%), automated over 20 processes with Blue Prism (99% success rate), utilized Python APIs and advanced SQL in Microsoft SQL Server for task execution, and worked in remote Citrix environments while managing development with JIRA, ITIL, Lean, and DevOps practices",
    type: "experience",
  },
  {
    title: "Network Operations Intern",
    company: "BSNL",
    logo: "src/assets/bsnl.png", // Add logo path
    duration: "Oct 2020 - Jan 2021",
    description:
      "Assisted technical teams in optimizing the transition from copper to fiber optic cables across BSNL’s network, ensuring minimal disruption and enhanced performance.",
    type: "experience",
  },
  {
    title: "Test Reporting Intern",
    company: "Medha Servo Drives Pvt Ltd",
    logo: "src/assets/medha.png", // Add logo path
    duration: "June 2018 - Sep 2018",
    description:
      "Conducted rigorous testing of components essential for installation on railway engines, meticulously documenting test results and reports.",
    type: "experience",
  },
  {
    title: "Bachelor of Engineering in Electronics and Communication",
    institution: "CBIT, Hyderabad",
    logo: "src/assets/cbit.png", // Add college logo
    duration: "July 2016 - Sep 2020",
    description:
      "Specialized in Data Structures, Machine Learning, and Database Management Systems, achieving top-tier rank in the state EAMCET exam.",
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
