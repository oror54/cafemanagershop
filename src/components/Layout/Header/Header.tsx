import React, { useState, useEffect } from 'react';
import WebHeader from './WebHeader';
import MobileHeader from './MobileHeader';

const menuItems = [
    {
        title: '신선제품',
        subItems: ['우유', '과일', '유제품', '기타'],
    },
    {
        title: '원두',
        subItems: ['약배전', '중배전', '강배전'],
    },
    {
        title: '디저트',
        subItems: ['케익', '생지', '구움과자', '기타'],
    },
    {
        title: '식재료',
        subItems: ['시럽', '소스', '파우더', '기타'],
    },
    {
        title: '부자재',
        subItems: ['일회용품', '식기', '베이킹', '기타'],
    },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <header id="header">
            <WebHeader menuItems={menuItems} isScrolled={isScrolled} />
            <MobileHeader
                menuItems={menuItems}
                isMenuOpen={isMobileMenuOpen}
                toggleMenu={toggleMobileMenu}
            />
        </header>
    );
}
