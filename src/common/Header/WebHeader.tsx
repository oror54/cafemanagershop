import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "$/assets/images/common/logo-character.svg";
import { MenuItemProps } from "./Header.types";

interface WebHeaderProps {
  menuItems: MenuItemProps[];
  isScrolled: boolean;
}

export default function WebHeader({ menuItems, isScrolled }: WebHeaderProps) {
  return (
    <div className={`${styles.WebHeader} ${isScrolled ? styles.fixed : ""}`}>
      <div className={styles.wrap}>
        <h1>
          <Link href={"#"} className={styles.logo}>
            <div className={styles.img}>
              <Image src={HeaderLogo} alt="카페매니저" />
            </div>
            <span>cafe manager</span>
          </Link>
        </h1>
        <nav className={styles.gnb}>
          <ul>
            {menuItems.map((item, index) => (
              <li className={styles.depth1} key={index}>
                <Link href={"#"} className={styles.depth_tit}>
                  <span className={styles.depth_box}>{item.title}</span>
                </Link>
                <ul className={styles.depth2}>
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={"#"}>{subItem}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}