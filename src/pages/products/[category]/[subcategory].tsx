import { useRouter } from "next/router";
import { products } from "@/data/products";
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
    const filteredProducts = products.filter(
        (product) => product.category === category && product.categoryDetail === subcategory
    );

    // Ensure filteredProducts is an array
    if (!Array.isArray(filteredProducts)) {
        console.error("filteredProducts is not an array");
        return <div>There was an error loading the products.</div>;
    }


    // Pagination logic
    const productsPerPage = 12; // Number of products per page
    const page = parseInt(router.query.page as string) || 1; // Get the current page from the URL, default to page 1 if not set

    // Calculate the index range of the products to display
    const startIndex = (page - 1) * productsPerPage;
    const currentPageProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    // Total number of pages
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Handle page change
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
