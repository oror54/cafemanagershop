import React from "react";
import { useRouter } from "next/router";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "$/assets/images/common/logo-character.svg";
import { MenuItemProps } from "@/data/Header.types";

interface MobileHeaderProps {
  menuItems: MenuItemProps[];
  isMenuOpen: boolean;
  toggleMenu: () => void;
  handleCategoryClick: (category: string) => void;
  handleSubCategoryClick: (category: string, subCategory: string) => void;
}

export default function MobileHeader({
  menuItems,
  isMenuOpen,
  toggleMenu,
  handleCategoryClick,
  handleSubCategoryClick,
}: MobileHeaderProps) {

  const router = useRouter();

  const isActiveCategory = (category: string) =>
    router.pathname === "/category/[category]" && router.query.category === category;


  const isActiveSubCategory = (category: string, subCategory: string) =>
    router.pathname === "/category/[category]/[subcategory]" &&
    router.query.category === category &&
    router.query.subcategory === subCategory;

  // Handle category click and navigate to the first subcategory if available
  const handleCategoryNavigation = (category: string, subItems: { name: string }[]) => {
    handleCategoryClick(category); // Trigger the category handler
    toggleMenu(); // Close the menu
    if (subItems.length > 0) {
      const firstSubCategory = subItems[0].name;
      router.push(`/products/${category}/${firstSubCategory}`); // Redirect to the first subcategory
    }
  };

  // Handle subcategory click
  const handleSubCategoryNavigation = (category: string, subCategory: string) => {
    handleSubCategoryClick(category, subCategory); // Trigger subcategory handler
    toggleMenu(); // Close the menu
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
                  <Link
                    href={`/products/${item.title}`}
                    onClick={() => handleCategoryNavigation(item.title, item.subItems)} // Trigger category click with redirection
                    className={`${styles.depth_tit} ${isActiveCategory(item.title) ? styles.active : ""}`}
                  >
                    {item.title}
                  </Link>
                  <div className={styles.depth2}>
                    <ul className={styles.inn}>
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={`/products/${item.title}/${subItem.name}`}
                            onClick={() => handleSubCategoryNavigation(item.title, subItem.name)} // Trigger subcategory click
                            className={`${isActiveSubCategory(item.title, subItem.name) ? styles.active : ""}`}
                          >
                            {subItem.name}
                          </Link>
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