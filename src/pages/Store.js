import React from "react";
import Layout from "../components/Layout";
import styles from "./css/Store.module.css";
import { Link } from "react-router-dom";
const store = () => {
  return (
    <Layout>
      <div className={styles.gridlayout}>
        {Object.entries(shoes).map(([slug, { name, img }]) => {
            return (
              <div className={styles.card}>
                <h4>{name}</h4>
                <img src={img} alt={name} />
                <Link to={`${slug}`}>More Details</Link>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
};

export default store;
