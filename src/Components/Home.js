import React, { useState, useEffect } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'; // For Resume icon
import MyImage from '../Images/FB_IMG_1728650153559.jpg'; // Replace with your actual image path
import Dashboard from './Dashboard';
import { faBook } from '@fortawesome/free-solid-svg-icons'; // Book icon for Education
import petAdoption from '../Images/Screenshot 2024-03-10 023936.png';
import employee from '../Images/emp.png';
import portfolio from '../Images/FB_IMG_1728650162885.jpg';
import Student from '../Images/Student.jpg.jpg';
import Instagram from '../Images/instagram.jpg';
import internship1 from '../Images/Screenshot 2024-10-12 090925.png';
import internship2 from '../Images/Screenshot 2024-09-08 161035.png';
import redhat from '../Images/Redhat.png';
import rpa from '../Images/bot.jpg';
import nptel from '../Images/nptel.png';
import codechef from '../Images/codechef.png';
import hackerrank from '../Images/HackerRank.png';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [displayText, setDisplayText] = useState('Software Engineer');
  const jobTitles = ['Software Engineer', 'Deepak Kasineni', 'Full Stack Developer'];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % jobTitles.length; // Cycle through the job titles
      setDisplayText(jobTitles[index]); // Update the display text
    }, 5000); // Change text every 5 seconds

    // Cleanup on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [jobTitles]);

  return (
    <div className="home-page">
      <Dashboard /> {/* Render the Dashboard component on the left */}
      <div className="home-container" id="home">  {/* Added id="home" */}
        <div className="image-container">
          <img src={MyImage} alt="My Profile" className="profile-image" />
        </div>
        <div className="description">
          <p className="bold-text">Hello, I'm {displayText}</p> {/* Dynamic display text */}
          <p>A passionate software developer with experience in full-stack development and a strong background in problem-solving.</p>
          
          <div className="social-icons">
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/deepak-kasineni-34726928b/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon linkedin-icon" />
            </a>
            {/* GitHub Icon */}
            <a href="https://github.com/Klu2200030814" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon github-icon" />
            </a>
            {/* Instagram Icon */}
            <a href="https://www.instagram.com/_.deepak.__18/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icon instagram-icon" />
            </a>
          </div>

          <button className="resume-button" onClick={() => window.open('https://drive.google.com/file/d/1TzHnGhKgOmCED6IPLzqMz6fOUyyk1Zac/view?usp=sharing', '_blank')}>
            <FontAwesomeIcon icon={faFileAlt} /> Resume
          </button>
        </div>
        
        <div className="about-me-container" id="aboutMe">
          <h2 className="about-me-title">About Me</h2>
          <p className="about-me-description">
            I’m Deepak Kasineni, a dedicated software developer specializing in Artificial Intelligence & Intelligent Process Automation, with a strong focus on the MERN stack (MongoDB, Express.js, React, and Node.js) and Java. My passion for problem-solving drives me to create efficient and user-friendly applications, as demonstrated through my projects, such as an Employee Management System and a Pet Adoption platform. I thrive on turning complex challenges into elegant solutions and continuously seek opportunities to expand my technical skills and knowledge.
            <br /><br />
            In addition to my development expertise, I have a growing interest in machine learning, where I explore innovative ways to integrate data-driven insights into my projects. My commitment to continuous learning and adaptability allows me to stay updated with the latest technologies and trends in the software industry. I am eager to contribute my skills and creativity to dynamic teams, helping to deliver impactful solutions that meet user needs and drive business success.
          </p>
        </div>

        {/* Education Section */}
        <div className="education-container" id="education">
          <h2 className="education-title"><FontAwesomeIcon icon={faBook} /> Education</h2>
          <div className="education-list">
            <div className="education-item">
              <strong>KL University, Vijayawada</strong><br />
              B.Tech in Computer Science <br />
              CGPA: 9.47<br />
              <span className="date-symbol">🗓️ Aug 2022 - Ongoing</span>
            </div>
            <div className="education-item">
              <strong>Sri Chaitanya Co-ed Junior College, Vijayawada</strong><br />
              Intermediate <br />
              CGPA: 9.18<br />
              <span className="date-symbol">🗓️ Jun 2020 - Jun 2022</span>
            </div>
            <div className="education-item">
              <strong>Swarna Bharathi Smart School, Vijayawada</strong><br />
              Xth <br />
              CGPA: 10<br />
              <span className="date-symbol">🗓️ Jun 2019 - May 2020</span>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects-container" id="projects">
          <h2 className="projects-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card" onClick={() => window.open('https://github.com/Klu2200030814', '_blank')}>
              <img src={petAdoption} alt="Pet Adoption" className="project-image" />
              <h3>Pet Adoption (Jan 2024 - Apr 2024)</h3>
              <p>• Developed a full-stack web application using the MERN stack.<br />
                • Implemented responsive front-end design with HTML, CSS, and JavaScript.<br />
                • Designed and maintained a secure back-end with Node.js and Express.js.<br />
                • Integrated MongoDB for data storage and retrieval.
              </p>
            </div>
            <div className="project-card" onClick={() => window.open('https://github.com/Klu2200030814', '_blank')}>
              <img src={employee} alt="Employee Management" className="project-image" />
              <h3>Employee Management (May 2024 - Jun 2024)</h3>
              <p>• Developed a JPA project for accessing employee records and performing all CRUD operations.<br />
                • Implemented front-end in JPA with a backend using JDBC.<br />
                • Utilized MySQL for database management.
              </p>
            </div>
            <div className="project-card" onClick={() => window.open('https://github.com/Klu2200030814', '_blank')}>
              <img src={portfolio} alt="Portfolio Project" className="project-image" />
              <h3>Portfolio Project</h3>
              <p>• Currently developing a comprehensive portfolio website to showcase my skills and projects.<br />
                • Features include sections for about me, projects, and contact information.<br />
                • Designed with a focus on user experience and responsive design.
              </p>
            </div>
            <div className="project-card" onClick={() => window.open('https://github.com/Klu2200030814', '_blank')}>
              <img src={Student} alt="Student Extracurricular Activities" className="project-image" />
              <h3>Student Extracurricular Activities Project</h3>
              <p>• Developed a platform to manage and track student participation in extracurricular activities.<br />
                • Features include event registration, notifications, and participation tracking.<br />
                • Utilized MERN stack for full-stack development.
              </p>
            </div>
            <div className="project-card" onClick={() => window.open('https://github.com/Klu2200030814', '_blank')}>
              <img src={Instagram} alt="Instagram Reach Prediction" className="project-image" />
              <h3>Instagram Reach Prediction</h3>
              <p>• Developed a machine learning model to predict the reach of Instagram posts based on various features.<br />
                • Analyzed data from posts to identify key factors influencing reach.<br />
                • Integrated model with a user-friendly interface for predictions.
              </p>
            </div>
          </div>
        </div>

        {/* Internship Section */}
        <div className="internship-container" id="internships">
            <h2 className="internship-title">Internships</h2>
          <div className="internship-grid">
            <div className="internship-card" onClick={() => window.open('https://drive.google.com/file/d/1eQ1F6qPrbq_B4pqO5OYpLxpnF-csmCc6/view?usp=sharing', '_blank')}>
              <img src={internship1} alt="Cisco Internship" className="internship-image" />
              <h3>AICTE, Cisco Virtual Internship </h3>
              <span className="date-symbol">🗓️ May 2024 - Jul 2024</span>
            </div>
            <div className="internship-card" onClick={() => window.open('https://drive.google.com/file/d/1WQz19a55lKfrg8ps0MCYztdYqAScWyos/view?usp=sharing', '_blank')}>
              <img src={internship2} alt="Google Android" className="internship-image1" />
              <h3>AICTE, Google Android Developer Virtual Internship </h3>
              <span className="date-symbol">🗓️ Jul 2024 - Sep 2024</span>
            </div>
          </div>
        </div>
        
        {/* Achievements Section */}
<div className="achievements-container" id="achievements">
  <h2 className="achievements-title">Achievements</h2>
  <div className="achievements-grid">
    {/* Red Hat Certificate */}
    <div className="achievement-card" onClick={() => window.open('https://www.credly.com/badges/7e4c4a2a-4e19-4f38-9cb2-d7551f4f5a89', '_blank')}>
      <img src={redhat} alt="Red Hat Certified Enterprise Application Developer" className="achievement-image" /> {/* Placeholder for now */}
      <h3>Red Hat Certified Enterprise Application Developer</h3>
    </div>

    {/* RPA Certificate */}
    <div className="achievement-card" onClick={() => window.open('https://certificates.automationanywhere.com/ab616d37-6b8b-4090-ad7e-f20c6035b398#gs.gk39yb', '_blank')}>
      <img src={rpa} alt="Robotic Process Automation Certificate" className="achievement-image" /> {/* Placeholder for now */}
      <h3>Robotic Process Automation Certificate</h3>
    </div>

    {/* NPTEL Certificate */}
    <div className="achievement-card" onClick={() => window.open('https://archive.nptel.ac.in/content/noc/NOC23/SEM1/Ecertificates/106/noc23-cs53/Course/NPTEL23CS53S4491061204028337.jpg', '_blank')}>
      <img src={nptel} alt="Problem Solving Through C" className="achievement-image" /> {/* Placeholder for now */}
      <h3>Problem Solving Through C</h3>
    </div>
  </div>
</div>
     {/* Contact Me Section (Footer) */}
<footer className="contact-container" id="contact">
  <div className="contact-info">
    {/* Phone Number */}
    <div className="contact-item">
    <FontAwesomeIcon icon={faPhone} className="fa fa-phone contact-icon" />
      <span className="contact-text">(+91) 7993995179</span>
    </div>
    
    {/* Gmail */}
    <div className="contact-item">
    <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope contact-icon" />
      <span className="contact-text">2200030814cseh@gmail.com</span>
    </div>
  </div>

  <div className="coding-profiles">
    {/* CodeChef Profile */}
    <div className="profile-item" onClick={() => window.open('https://www.codechef.com/users/kl_2200030814', '_blank')}>
      <img src={codechef} alt="CodeChef" className="profile-icon" /> {/* Replace with actual icon */}
      <span className="profile-text">CodeChef</span>
    </div>
    
    {/* HackerRank Profile */}
    <div className="profile-item" onClick={() => window.open('https://www.hackerrank.com/profile/KLU_2200030814', '_blank')}>
      <img src={hackerrank} alt="HackerRank" className="profile-icon" /> {/* Replace with actual icon */}
      <span className="profile-text">HackerRank</span>
    </div>
  </div>
</footer>

        
      </div>
    </div>
  );
}

export default Home;
