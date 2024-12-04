import { useRouter } from "next/router";

import ProductList from "../ProductList";
import { menuItems } from "@/data/menuItems";
import Image from "next/image";
import styles from "../ProductPage.module.css";
import Link from "next/link";
import Pagination from "@/common/Pagination/Pagination";
import { allData } from "@/data/allData";

export default function SubCategoryPage() {
  const router = useRouter();
  const { category, subcategory } = router.query;

  // category와 subcategory 값이 준비되지 않으면 로딩 처리
  if (!category || !subcategory) {
    return <div>Loading...</div>;
  }

  // 해당 카테고리 가져오기
  const currentCategory = menuItems.find((item) => item.realTitle === category);
  if (!currentCategory) return <div>Category not found</div>; // 카테고리가 없으면 로드 처리

  const { imageUrl, subItems, realTitle, title } = currentCategory;

  // 하위 카테고리별 제품 필터링
  const filteredProducts = allData.filter(
    (item) => item.category === realTitle && item.subCategory === subcategory // subcategory.realName과 비교
  );
  // Pagination logic
  const productsPerPage = 12;
  const page = isNaN(parseInt(router.query.page as string))
    ? 1
    : parseInt(router.query.page as string);

  const startIndex = (page - 1) * productsPerPage;
  const currentPageProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (newPage: number) => {
    router.push(`/products/${category}/${subcategory}?page=${newPage}`);
  };

  return (
    <div>
      {imageUrl && (
        <section className={styles.sec01}>
          <div className={styles.categoryImage}>
            <Image src={imageUrl} alt={`${category} image`} />
          </div>
        </section>
      )}

      <section className={styles.sec02}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <p>
            {subItems.filter((item) => item.realName === subcategory)[0]?.name}
          </p>
        </div>

        {/* 하위 카테고리 탭 */}
        <div className={styles.subCategoryTabs}>
          {subItems.map(({ name, realName, icon }) => (
            <Link
              key={realName}
              href={`/products/${category}/${realName}`}
              passHref
              className={`${styles.subCategoryLink} ${
                subcategory === realName ? styles.active : ""
              }`}
            >
              <div className={styles.tabInner}>
                <div className={styles.tabIcon}>
                  {/* icon이 없을 경우 기본 아이콘 사용 */}
                  <Image
                    src={icon || "/default-icon.png"}
                    alt={`${name} icon`}
                  />
                </div>
                <p>{name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 제품 리스트가 없으면 안내 메시지 표시 */}
      {filteredProducts.length === 0 ? (
        <div>No products found</div>
      ) : (
        <ProductList products={currentPageProducts} />
      )}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
