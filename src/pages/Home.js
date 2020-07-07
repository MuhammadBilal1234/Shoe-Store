import React from "react";
import Layout from "../components/Layout";
import shoe from "../assets/image/main-shoe.jpg";
import styles from "../pages/css/Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>World of Shoes</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores totam 
                Maiores totam expedita assumenda nulla eos nisi beatae
                inventore, eveniet dignissimos! Quos saepe dolorem unde vel
                repellendus.
              </p>
              <Link to="store"> Explore Store <span>></span> </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
