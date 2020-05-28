import React from "react";

const skillInfo = {
  icons: [
    "fab fa-html5",
    "fab fa-css3-alt",
    "fab fa-js-square",
    "fab fa-react",
    "fab fa-node-js",
    "fab fa-sass",
    "fab fa-gulp",
  ],
  skills: [
    "HTML, CSS, Javascript",
    "SASS, GULP",
    "React, Redux, @reduxjs/toolkit, Redux Saga, Redux Thunk",
    "graphQL, Apollo, Prisma",
    "Styled Components, Reactstrap, TailwindCSS, Bootstrap, Bulma, Rebass",
    "MomentJS, @testing-library/jest-dom, axios, jwt-decode, storybook, react-google-maps, infinite scrollbars",
    "Node, Express, MongoDB, MySQL",
    "passport, JWT, gravatar, cors, validator, mongoose, bcrypt",
  ],
};

const Skills = () => {
  const { icons, skills } = skillInfo;

  const iconSkills = icons.map((icon, index) => (
    <li className="list-inline-item" key={index}>
      <i className={icon}></i>
    </li>
  ));

  const skillList = skills.map((skill, index) => (
    <li key={index}>
      <span className="fa-li">
        <i className="fas fa-check"></i>
      </span>
      {skill}
    </li>
  ));
  return (
    <div>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages & Tools</div>
          <ul className="list-inline dev-icons">{iconSkills}</ul>
          <ul className="fa-ul mb-0">{skillList}</ul>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default Skills;
