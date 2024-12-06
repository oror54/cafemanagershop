import React from "react";
import { useRouter } from "next/router";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "$/assets/images/common/logo-character.svg";
import { MenuItemProps } from "src/data/Header.types"; 

interface MobileHeaderProps {
  menuItems: MenuItemProps[];
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function MobileHeader({
  menuItems,
  isMenuOpen,
  toggleMenu,
}: MobileHeaderProps) {
  const router = useRouter();

  const isActiveCategory = (category: string) =>
    router.pathname === "/category/[category]" &&
    router.query.category === category;

  const isActiveSubCategory = (category: string, subCategory: string) =>
    router.pathname === "/category/[category]/[subcategory]" &&
    router.query.category === category &&
    router.query.subcategory === subCategory;

  const handleCategoryClickWithRedirection = (
    category: string,
    name: string
  ) => {
    router.push(`/products/${category}/${name}`);
  };

  const onClickSubCategory = (category: string, subCategory: string) => {
    console.log(subCategory);
    router.push(`/products/${category}/${subCategory}`);
  };

  return (
    <div className={styles.mobile}>
      <div className={`${styles.mHeader} ${isMenuOpen ? styles.act : ""}`}>
        <div className={styles.wrap}>
          <div className={styles.inner}>
            <h1>
              <Link href="/" className={styles.logo}>
                <div className={styles.img}>
                  <Image src={HeaderLogo} alt="카페매니저" />
                </div>
                <span>cafe manager</span>
              </Link>
            </h1>
            <button
              className={`${styles.mBtn} ${isMenuOpen ? styles.close : ""}`}
              onClick={toggleMenu}
            >
              <span className={styles.bar1}></span>
              <span className={styles.bar2}></span>
              <span className={styles.bar3}></span>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <aside className={`${styles.lnb} ${isMenuOpen ? styles.act : ""}`}>
          <div className={styles.inn}>
            <ul>
              {menuItems.map((item) => (
                <li className={styles.depth1} key={item.title}>
                  <button
                    onClick={() =>
                      handleCategoryClickWithRedirection(
                        item.realTitle,
                        item.subItems[0].realName
                      )
                    }
                    className={`${styles.depth_tit} ${
                      isActiveCategory(item.title) ? styles.active : ""
                    }`}
                  >
                    {item.title}
                  </button>
                  <div className={styles.depth2}>
                    <ul className={styles.inn}>
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() =>
                              onClickSubCategory(
                                item.realTitle,
                                subItem.realName
                              )
                            } // Trigger subcategory click
                            className={`${
                              isActiveSubCategory(item.title, subItem.name)
                                ? styles.active
                                : ""
                            }`}
                          >
                            {subItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
}
