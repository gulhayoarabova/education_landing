import React from "react";
import styles from "../styles/Footer.module.css";
import logo from "../pages/images/smartlogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.footer_wrapper}>
      <div className={styles.first}>
        <Image
          src={logo}
          alt=""
          className={styles.logoImg}
          width={250}
          height={70}
        />
        <p className={styles.footer_title}>O`quv markazlar va maktablarni aqlli boshqarish tizimi</p>
        <p className={styles.light_txt}>© 2019 TITG. Barcha huquqlar himoyalangan</p>
      </div>
      <div className={styles.second}>
        <ul>
          <li className={styles.footer_title}>Kompaniya</li>
          <li className={styles.light_txt}> Biz haqimizda </li>
          <li className={styles.light_txt}>Mutaxassislar yordami</li>
          <li className={styles.light_txt}>Yangiliklar</li>
          <li className={styles.light_txt}>Shartnoma</li>
        </ul>
      </div>
      <div className={styles.third}>
        <ul>
          <li className={styles.footer_title}>Murojaat uchun</li>
          <li className={styles.address}>
            Turon Information Technology Group Toshkent shahar Yunusobod tumani
            15 - mavze 42A-uy
          </li>
          <li className={styles.address}> +998 94 505 52 50</li>
          <li className={styles.address}>+998 88 620 06 06</li>
          <li className={styles.address}> +998 94 605 05 85</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Footer;
