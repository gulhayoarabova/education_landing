import React from "react";
import styles from "../styles/Header.module.css";
import home from "../pages/images/icon-white.png";
import uz from "../pages/images/uz.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.container}>
        <div className={styles.home_wrap}>
          <Image
            src={home}
            alt=""
            className={styles.logoImg}
            width={50}
            height={50}
          />
        </div>
        <ul className={styles.navbar}>
          <li>News</li>
          <li>EduSmart</li>
          <li>Qo`llanma</li>
          <li>Hamkorlik</li>
          <li>Bog`lanish</li>
        </ul>
        <div className={styles.login}>
          <div className={styles.lan_wrap}>
              <Image
                src={uz}
                alt=""
                className={styles.logoImg}
                width={20}
                height={15}
              />
            <p className={styles.lan_item}>
              O`zbek
            </p>
          </div>
          <p className={styles.kirish}>Kirish</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
