import React from "react";
import experiences from "./experiences";

const Experience = () => {
  const experienceSection = experiences.map((exp, index) => (
    <div
      className="d-flex flex-column flex-md-row justify-content-between mb-5"
      key={index}
    >
      <div className="flex-grow-1">
        <h3 className="mb-0">{exp.position}</h3>
        <div className="subheading mb-3">{exp.company}</div>
        <p dangerouslySetInnerHTML={{ __html: exp.description }} />
      </div>
      <div className="flex-shrink-0">
        <span className="text-primary">
          {exp.from} - {exp.to}
        </span>
      </div>
    </div>
  ));

  return (
    <div>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          {experienceSection}
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default Experience;
