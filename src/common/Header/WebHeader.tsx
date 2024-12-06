import React from "react";
import { useRouter } from "next/router"; // Import useRouter here
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "$/assets/images/common/logo-character.svg";
import { MenuItemProps } from "src/data/Header.types"; 

interface WebHeaderProps {
  menuItems: MenuItemProps[];
  isScrolled: boolean;
  handleCategoryClick?: (category: string) => void;
  handleSubCategoryClick?: (category: string, subCategory: string) => void;
}

export default function WebHeader({ menuItems, isScrolled }: WebHeaderProps) {
  const router = useRouter();

  // // Helper to check active category
  const isActiveCategory = (category: string) =>
    router.pathname === `/products/[category]` &&
    router.query.category === category;

  // Helper to check active subcategory
  const isActiveSubCategory = (category: string, subCategory: string) =>
    router.pathname === `/products/[category]/[subcategory]` &&
    router.query.category === category &&
    router.query.subcategory === subCategory;

  // // Modified handleCategoryClick to navigate to first subcategory
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

  const render1depthItems = (item: MenuItemProps) => {
    return (
      <li className={styles.depth1} key={item.title}>
        <button
          className={`${styles.depth_tit} ${
            isActiveCategory(item.title) ? styles.active : ""
          }`}
          onClick={() =>
            handleCategoryClickWithRedirection(
              item.realTitle,
              item.subItems[0].realName
            )
          }
        >
          <span className={styles.depth_box}>{item.title}</span>
        </button>
        <ul className={styles.depth2}>
          {item.subItems.map((subItem) => (
            <li key={subItem.name}>
              <button
                className={`${
                  isActiveSubCategory(item.title, subItem.name)
                    ? styles.active
                    : ""
                }`}
                onClick={() =>
                  onClickSubCategory(item.realTitle, subItem.realName)
                }
              >
                {subItem.name}
              </button>
            </li>
          ))}
        </ul>
      </li>
    );
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
          <ul>{menuItems.map(render1depthItems)}</ul>
        </nav>
      </div>
    </div>
  );
}
