import { useRouter } from "next/router";
import { products } from "@/data/products";
import { menuItems } from "@/data/menuItems";
import React, { useEffect } from "react";
import ProductList from "./ProductList";
import Link from "next/link";
import styles from "./ProductPage.module.css";
import Image from "next/image";

export default function CategoryPage() {
    const router = useRouter();
    const { category } = router.query;

    // 카테고리가 준비되었을 때, 첫 번째 서브 카테고리로 자동 이동
    useEffect(() => {
        if (category) {
            const currentMenu = menuItems.find((item) => item.title === category);
            if (currentMenu && currentMenu.subItems.length > 0) {
                // 첫 번째 서브 카테고리로 리디렉션
                const firstSubCategory = currentMenu.subItems[0].name;
                router.push(`/products/${category}/${firstSubCategory}`);
            }
        }
    }, [category, router]); // category 값이 변경될 때마다 실행


    // 카테고리 준비가 되지 않았으면 로딩 상태를 표시
    if (!category) {
        return <div>Loading...</div>;
    }

    const currentMenu = menuItems.find((item) => item.title === category);
    const subCategories = currentMenu ? currentMenu.subItems : [];
    const categoryImage = currentMenu ? currentMenu.imageUrl : "";

    // 카테고리별 제품 필터링
    const filteredProducts = products.filter((product) => product.category === category);


    return (
        <div>
            {/* 카테고리 이미지 */}
            {categoryImage && (
                <section className={styles.sec01}>
                    <div className={styles.categoryImage}>
                        <Image
                            src={categoryImage}
                            alt={`${category} image`}
                            layout="responsive"
                        />
                    </div>
                </section>
            )}
            <section className={styles.sec02}>
                <div className={styles.title}>
                    <h3>{category}</h3>
                </div>
                {/* 서브 카테고리 탭 */}
                <div className={styles.subCategoryTabs}>
                    {subCategories.map((subCategory) => (
                        <Link
                            key={subCategory.name}
                            href={`/products/${category}/${subCategory}`}
                            passHref
                            className={styles.subCategoryLink}
                        >
                            {subCategory.name}
                        </Link>
                    ))}
                </div>
            </section>
            {/* 전체 제품 리스트 */}
            <ProductList products={filteredProducts} />
        </div>
    );
}
