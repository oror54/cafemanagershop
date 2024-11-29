import React, { useState, useEffect } from 'react';
import WebHeader from './WebHeader';
import MobileHeader from './MobileHeader';
import styles from './Header.module.css';
import { useRouter } from 'next/router';
import { menuItems } from "@/data/menuItems"


export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();
    console.log(router);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        // Cleanup to reset overflow on component unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const handleCategoryClick = (category: string) => {
        router.push(`/products/${category}`);
    };

    const handleSubCategoryClick = (category: string, subCategory: string) => {
        router.push(`/products/${category}/${subCategory}`);
    };

    return (
        <header id="header" className={`${styles.header} ${isHovered ? styles.on : ''} ${isScrolled ? styles.fixed : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <WebHeader
                menuItems={menuItems}
                isScrolled={isScrolled}
                handleCategoryClick={handleCategoryClick}
                handleSubCategoryClick={handleSubCategoryClick} />
            <MobileHeader
                menuItems={menuItems}
                isMenuOpen={isMobileMenuOpen}
                toggleMenu={toggleMobileMenu}
                handleCategoryClick={handleCategoryClick}
                handleSubCategoryClick={handleSubCategoryClick}
            />
        </header>
    );
}