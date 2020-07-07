import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className={styles.navItems}>
          <li>
            <Link to="/" as="a">
              Home
            </Link>
          </li>
          <li>
            <Link to="store" as="a">
              Store
            </Link>
          </li>
          <li>
            <Link to="/about" as="a">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
