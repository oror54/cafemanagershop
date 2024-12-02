import React from "react";
import { useRouter } from "next/router"; // Import useRouter here
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "$/assets/images/common/logo-character.svg";
import { MenuItemProps } from "@/data/Header.types";

interface WebHeaderProps {
  menuItems: MenuItemProps[];
  isScrolled: boolean;
  handleCategoryClick: (category: string) => void;
  handleSubCategoryClick: (category: string, subCategory: string) => void;
}

export default function WebHeader({
  menuItems,
  isScrolled,
  handleCategoryClick,
  handleSubCategoryClick,
}: WebHeaderProps) {
  const router = useRouter();

  // Helper to check active category
  const isActiveCategory = (category: string) =>
    router.pathname === `/products/[category]` &&
    router.query.category === category;

  // Helper to check active subcategory
  const isActiveSubCategory = (category: string, subCategory: string) =>
    router.pathname === `/products/[category]/[subcategory]` &&
    router.query.category === category &&
    router.query.subcategory === subCategory;

  // Modified handleCategoryClick to navigate to first subcategory
  const handleCategoryClickWithRedirection = (category: string, subItems: { name: string }[]) => {
    handleCategoryClick(category); // Trigger original category handler
    if (subItems.length > 0) {
      const firstSubCategory = subItems[0].name;
      router.push(`/products/${category}/${firstSubCategory}`); // Redirect to the first subcategory
    }
  };

  return (
    <div className={`${styles.WebHeader} ${isScrolled ? styles.fixed : ""}`}>
      <div className={styles.wrap}>
        <h1>
          <Link href="/" className={styles.logo}>
            <div className={styles.img}>
              <Image src={HeaderLogo} alt="카페매니저" />
            </div>
            <span>cafe manager</span>
          </Link>
        </h1>
        <nav className={styles.gnb}>
          <ul>
            {menuItems.map((item) => (
              <li className={styles.depth1} key={item.title}>
                <Link
                  href={`/products/${item.title}`}
                  className={`${styles.depth_tit} ${isActiveCategory(item.title) ? styles.active : ""}`}
                  onClick={() => handleCategoryClickWithRedirection(item.title, item.subItems)} // Trigger category handler with redirection
                >
                  <span className={styles.depth_box}>{item.title}</span>
                </Link>
                <ul className={styles.depth2}>
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        href={`/products/${item.title}/${subItem.name}`}
                        className={`${isActiveSubCategory(item.title, subItem.name) ? styles.active : ""}`}
                        onClick={() => handleSubCategoryClick(item.title, subItem.name)} // Trigger subcategory handler
                      >
                        {subItem.name}
                      </Link>
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