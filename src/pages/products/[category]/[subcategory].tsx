import { useRouter } from "next/router";
import { productsByCategory } from "@/data/products/index";
import { Product } from "@/data/Product.types";
import ProductList from "../ProductList";
import { menuItems } from "@/data/menuItems";
import Image from "next/image";
import styles from "../ProductPage.module.css";
import Link from "next/link";
import Pagination from "@/common/Pagination/Pagination";


export default function SubCategoryPage() {
    const router = useRouter();
    const { category, subcategory } = router.query;



    // 해당 카테고리 가져오기
    const currentCategory = menuItems.find(item => item.title === category);
    if (!currentCategory) return <div>로딩 중...</div>; // 카테고리가 없으면 로드 처리

    const { imageUrl, subItems } = currentCategory;


  // 하위 카테고리별 제품 필터링
  const categoryProducts: Product[] = productsByCategory[category as keyof typeof productsByCategory] || [];
  const filteredProducts = categoryProducts.filter(
      (product) => product.categoryDetail === subcategory
  );
// Pagination logic
const productsPerPage = 12;
const page = isNaN(parseInt(router.query.page as string)) ? 1 : parseInt(router.query.page as string);

const startIndex = (page - 1) * productsPerPage;
const currentPageProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

const handlePageChange = (newPage: number) => {
    router.push(`/products/${category}/${subcategory}?page=${newPage}`);
};

    return (
        <div>
            {imageUrl && (
                <section className={styles.sec01}>
                    <div className={styles.categoryImage}>
                        <Image src={imageUrl} alt={`${category} image`} layout="responsive" />
                    </div>
                </section>
            )}

            <section className={styles.sec02}>
                <div className={styles.title}>
                    <h3>{category}</h3>
                    <p>{subcategory}</p> Products
                </div>

                {/* 하위 카테고리 탭 */}
                <div className={styles.subCategoryTabs}>
                    {subItems.map(({ name, icon }) => (
                        <Link
                            key={name}
                            href={`/products/${category}/${name}`}
                            passHref
                            className={`${styles.subCategoryLink} ${subcategory === name ? styles.active : ''}`}
                        >
                            <div className={styles.tabInner}>
                                <div className={styles.tabIcon}>
                                    <Image src={icon} alt={`${name} icon`} />
                                </div>
                                <p>{name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <ProductList products={currentPageProducts} />
            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
