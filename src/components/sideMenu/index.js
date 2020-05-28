import React, { useState } from "react";
import classnames from "classnames";
import Avatar from "../../assets/profile-image.jpg";

const SideMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onClick = () => setOpenMenu(!openMenu);

  // Avatar component
  const avatar = (
    <a
      className="navbar-brand js-scroll-trigger"
      href="https://www.linkedin.com/in/adrianberia2013/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="d-block d-lg-none">Adrian Beria</span>
      <span className="d-none d-lg-block">
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src={Avatar}
          alt="ImageProfile"
        />
      </span>
    </a>
  );

  // Toggler Icon
  const togglerButton = (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={onClick}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );

  const sections = [
    "about",
    "skills",
    "projects",
    "experience",
    "education",
    "awards",
    "contact",
  ];

  const options = sections.map((section) => (
    <li className="nav-item" key={section} onClick={onClick}>
      <a className="nav-link js-scroll-trigger" href={`#${section}`}>
        {section}
      </a>
    </li>
  ));

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      {avatar}
      {togglerButton}
      <div
        className={classnames("navbar-collapse", {
          collapse: !openMenu,
        })}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">{options}</ul>
      </div>
    </nav>
  );
};

export default SideMenu;
