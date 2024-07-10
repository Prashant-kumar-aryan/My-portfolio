import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/Header.css"; // Assuming you have a CSS file for styling
import logo from "../assets/images/logo.png";

const routes = [
  { path: "/", name: "HOME" },
  { path: "/education", name: "EDUCATION" },
  { path: "/projects", name: "PROJECTS" },
  { path: "/contact", name: "CONTACT" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav aria-label="Main navigation">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ height: "10vh", overflow: "hidden" }}
          />
        </div>
        <ul className="nav-links">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={location.pathname === route.path ? "active" : ""}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
