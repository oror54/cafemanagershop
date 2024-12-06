import React, { useState, useEffect } from "react";
import WebHeader from "./WebHeader";
import MobileHeader from "./MobileHeader";
import styles from "./Header.module.css";
import { useRouter } from "next/router";
import { menuItems } from "src/data/menuItems"; 

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    // Cleanup to reset overflow on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // 상세페이지인지 확인하는 로직
  const isProductPage =
    router.pathname.startsWith("/products/") && router.query.productId;

  return (
    <header
      id="header"
      className={`${styles.header} ${
        isHovered || isProductPage ? styles.on : ""
      } ${isScrolled ? styles.fixed : ""} ${isProductPage ? "white" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <WebHeader menuItems={menuItems} isScrolled={isScrolled} />
      <MobileHeader
        menuItems={menuItems}
        isMenuOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
      />
    </header>
  );
}
