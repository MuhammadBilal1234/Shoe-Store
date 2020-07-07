import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./css/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
