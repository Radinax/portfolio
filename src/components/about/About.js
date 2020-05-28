import React from "react";

const personalInfo = {
  address: " Guayana City, Bolivar State, Venezuela · (+58) 4148811738 ·",
  email: "adrberia@gmail.com",
  description:
    "I am a Fullstack Web Developer using the MERN stack (MongoDB, Express, React and Node), with four years of professional experience as a Frontend Web Developer. I have a title as Electric Engineer and experience working as Professor at a University for Engineer Students.",
  socialMediaInfo: {
    twitter: { link: "https://twitter.com/Adrberia", class: "fab fa-twitter" },
    facebook: {
      link: "https://www.facebook.com/adrberia",
      class: "fab fa-facebook-f",
    },
    linkedin: {
      link: "https://www.linkedin.com/in/adrianberia2013/",
      class: "fab fa-linkedin-in",
    },
    github: { link: "https://github.com/Radinax", class: "fab fa-github" },
  },
};

const About = () => {
  const { address, email, description, socialMediaInfo } = personalInfo;
  // Name
  const nameSection = (
    <h1 className="mb-0">
      Adrian <span className="text-primary">Beria</span>
    </h1>
  );

  // Address and Email
  const addressSection = (
    <div className="subheading mb-5">
      {address} <a href={`mailto:${email}`}>{email}</a>
    </div>
  );

  // Description of the user
  const descriptionSection = <p className="lead mb-5">{description}</p>;

  // Social Media map
  const socialMedia = Object.keys(socialMediaInfo).map((media, index) => (
    <a className="social-icon" href={socialMediaInfo[media].link} key={index}>
      <i className={socialMediaInfo[media].class}></i>
    </a>
  ));

  // Social Media component
  const socialLinks = <div className="social-icons">{socialMedia}</div>;

  return (
    <div>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          {nameSection}
          {addressSection}
          {descriptionSection}
          {socialLinks}
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default About;
