import React from 'react';
import './Dashboard.css';
import { Link } from 'react-scroll'; // Import for smooth scroll
import MyImage from '../Images/FB_IMG_1728650147192.jpg';  // Replace with your actual image path

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="image-container">
        <img src={MyImage} alt="My Profile" className="profile-image-circle" />
      </div>
      <div>
        <h1 className="h1">Deepak Kasineni</h1>
      </div>
      <div className="buttons-container">
        {/* Smooth scroll to Home */}
        <Link to="home" smooth={true} duration={500} className="dashboard-button">Home</Link>
        {/* Smooth scroll to About Me */}
        <Link to="aboutMe" smooth={true} duration={500} className="dashboard-button">About Me</Link>
        {/* Add other buttons similarly */}
        <Link to="education" smooth={true} duration={500} className="dashboard-button">Education</Link>
        <Link to="projects" smooth={true} duration={500} className="dashboard-button">Projects</Link>
        <Link to="internships" smooth={true} duration={500} className="dashboard-button">Internships</Link>
        <Link to="achievements" smooth={true} duration={500} className="dashboard-button">Achivements</Link>
        <Link to="contact" smooth={true} duration={500} className="dashboard-button">Contact Me</Link>
      </div>
    </div>
  );
};

export default Dashboard;
