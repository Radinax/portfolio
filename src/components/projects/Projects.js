import React from "react";
import Covid from "../../assets/covid-project.png";
import DevConnector from "../../assets/dev-connector.png";
import Blog from "../../assets/blog.png";
import Domo from "../../assets/domoviz.png";

const projectInfo = [
  {
    title: "Covid-19 Venezuela and Worldwide data chart",
    component: Covid,
    link: "https://radinax.github.io/covid-19-chart/",
  },
  {
    title: "Social Network for Developers",
    component: DevConnector,
    link: "https://secret-ocean-02865.herokuapp.com/",
  },
  {
    title: "React Blog",
    component: Blog,
    link: "https://radinax.github.io/React-Personal-Blog-Gatsby/",
  },
  {
    title: "Website for Architects",
    component: Domo,
    link: "http://www.domoviz.com/",
  },
];

const Projects = () => {
  const projectSection = projectInfo.map((project, index) => (
    <div className="col-md-6 col-lg-4 mb-5" key={index}>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="portfolio-item mx-auto" data-toggle="modal">
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={project.component} alt="" />
        </div>
      </a>
      <div className="text-center">{project.title}</div>
    </div>
  ));

  return (
    <div>
      <section className="page-section portfolio" id="projects">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-5">
            Projects
          </h2>
          <div className="row">{projectSection}</div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default Projects;
