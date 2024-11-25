import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import HeaderLogo from "public/assets/images/common/logo-character.svg"


interface MenuItem {
    title: string;
    subItems: string[];
}

interface MobileHeaderProps {
    menuItems: MenuItem[];
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export default function MobileHeader({
    menuItems,
    isMenuOpen,
    toggleMenu,
}: MobileHeaderProps) {
    return (
        <div className={styles.mobile}>
            <div className={`${styles.mHeader} ${isMenuOpen ? styles.act : ''}`}>
                <div className={styles.wrap}>
                    <div className={styles.inner}>
                        <h1>
                            <Link href={"#"} className={styles.logo}>
                                <div className={styles.img}>
                                    <Image src={HeaderLogo} alt="카페매니저" />
                                </div>
                                <span>cafe manager</span>
                            </Link>
                        </h1>
                        <button
                            className={`${styles.mBtn} ${isMenuOpen ? styles.close : ''}`}
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
                <aside className={`${styles.lnb} ${isMenuOpen ? styles.act : ''}`}>
                    <div className={styles.inn}>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li className={styles.depth1} key={index}>
                                    <Link href={"#"} className={styles.depth_tit}>
                                        {item.title}
                                    </Link>
                                    <div className={styles.depth2}>
                                        <ul className={styles.inn}>
                                            {item.subItems.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link href={"#"}>{subItem}</Link>
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
