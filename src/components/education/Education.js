import React from "react";

const educationInfo = [
  {
    institution: "U.E NUESTRA SEÑORA DE COROMOTO”",
    title: "BACHELOR OF SCIENCE",
    type: "",
    from: "September 1995",
    to: "July 2007",
  },
  {
    institution:
      "NATIONAL EXPERIMENTAL POLYTECHNIC UNIVERSITY ANTONIO JOSÉ DE SUCRE",
    title: "Electrical Engineer",
    type: "Professional Degree",
    from: "October 2007",
    to: "August 2013",
  },
  {
    institution:
      "NATIONAL EXPERIMENTAL POLYTECHNIC UNIVERSITY ANTONIO JOSÉ DE SUCRE",
    title: "Professional Educator",
    type: "Educator Training Program",
    from: "November 2016",
    to: "May 2017",
  },
  {
    institution: "Free Code Camp",
    title: "Frontend Web Developer",
    type: "Online Course",
    from: "July 2016",
    to: "November 2017",
  },
];

const Education = () => {
  const educationSection = educationInfo.map((edu) => (
    <div
      className="d-flex flex-column flex-md-row justify-content-between mb-5"
      key={edu.type}
    >
      <div className="flex-grow-1">
        <h3 className="mb-0">{edu.institution}</h3>
        <div className="subheading mb-3">{edu.title}</div>
        <div>{edu.type}</div>
      </div>
      <div className="flex-shrink-0">
        <span className="text-primary">
          {edu.from} - {edu.to}
        </span>
      </div>
    </div>
  ));
  return (
    <div>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          {educationSection}
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default Education;
