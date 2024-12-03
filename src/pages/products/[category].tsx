import { useRouter } from "next/router";
import { productsByCategory } from "@/data/products";
import { menuItems } from "@/data/menuItems";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Link from "next/link";
import styles from "./ProductPage.module.css";
import Image from "next/image";

export default function CategoryPage() {
    const router = useRouter();
    const { category } = router.query;

    const [isCategoryReady, setCategoryReady] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false);

    // category 값이 준비되었을 때 실행되는 useEffect
    useEffect(() => {
        if (category && !Array.isArray(category)) {
            setCategoryReady(true);
        }
    }, [category]);

    // category 값이 준비되지 않았을 때 로딩 화면을 표시
    if (!isCategoryReady) {
        return <div>Loading...</div>;
    }

    const currentCategory = category as string;
    const currentMenu = menuItems.find((item) => item.title === currentCategory);

    // 카테고리가 유효하지 않으면 "Category not found" 화면 표시
    if (!currentMenu) {
        return <div>Category not found</div>;
    }

    const { subItems: subCategories, imageUrl: categoryImage } = currentMenu;

    // 서브 카테고리로 리디렉션 처리
    useEffect(() => {
        if (category && currentMenu && !isRedirecting && currentMenu.subItems.length > 0) {
            const firstSubCategory = currentMenu.subItems[0].name;
            setIsRedirecting(true); // 리디렉션 상태로 변경
            router.push(`/products/${currentCategory}/${firstSubCategory}`);
        }
    }, [category, currentCategory, currentMenu, isRedirecting, router]); // 의존성 배열에서 isRedirecting 포함

    const filteredProducts = productsByCategory[currentCategory] || [];

    return (
        <div>
            {categoryImage && (
                <section className={styles.sec01}>
                    <div className={styles.categoryImage}>
                        <Image
                            src={categoryImage}
                            alt={`${currentCategory} image`}
                            layout="responsive"
                            width={800}
                            height={400}
                        />
                    </div>
                </section>
            )}
            <section className={styles.sec02}>
                <div className={styles.title}>
                    <h3>{currentCategory}</h3>
                </div>
                <div className={styles.subCategoryTabs}>
                    {subCategories.map((subCategory) => (
                        <Link
                            key={subCategory.name}
                            href={`/products/${currentCategory}/${subCategory.name}`}
                        >
                            <a className={styles.subCategoryLink}>{subCategory.name}</a>
                        </Link>
                    ))}
                </div>
            </section>
            <ProductList products={filteredProducts} />
        </div>
    );
}
