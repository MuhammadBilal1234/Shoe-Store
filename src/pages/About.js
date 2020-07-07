import React from "react";
import Layout from "../components/Layout";
import styles from "./css/About.module.css";

const About = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <p>This is Project 3 for Bootcamp 2020 by Panacloud.</p>
        <p>Created by Muhammad Bilal.</p>
        <p>Want to Check my other Work? Here's My Github Link and Portfolio.</p>

        <div className={styles.github}>
          <a href="https://github.com/MuhammadBilal1234" target="_blank">
            Github
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default About;
