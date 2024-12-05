import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { allData } from "@/data/allData";
import { Product } from "@/data/Product.types";
import Image from "next/image";
import styles from "./ItemDetail.module.css";

interface ProductDetailsProps {
    product: Product | null;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <p>로딩중 입니다.</p>;
    }

    if (!product) {
        return <p>제품을 찾지 못했습니다.</p>;
    }

    const handleBackToList = () => {
        // Navigate back to the product list based on category and subcategory
        router.push(`/products/${product.category}/${product.subCategory}`);
    };

    return (
        <main>
            <section className={styles.ViewDetails}>
                <div className={styles.DetailTitle}>
                    <div className={styles.TitleImage}>
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                        />
                    </div>
                    <div className={styles.TitleText}>
                        <div className={styles.TextWrap}>
                            <div className={styles.CategoytyWrap}>
                                <p className={styles.cate}>{product.categoryKo}</p>
                                <p className={styles.subcate}>{product.categoryDetail}</p>
                            </div>
                            <h3 className={styles.name}>{product.name}</h3>
                            <p className={styles.brand}> {product.brand}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.Details}>
                <div className={styles.description}>
                    <Image
                        src={product.description}
                        alt={product.name}
                        width={1000}
                    />
                </div>
            </section>
            <section className={styles.BackButtonSection}>
                <button className={styles.backButton} onClick={handleBackToList}>
                    목록으로
                </button>
            </section>
        </main>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = allData.map((product) => ({
        params: {
            category: product.category,
            subcategory: product.subCategory,
            productId: product.id.toString(),
        },
    }));

    return {
        paths,
        fallback: true, // Enable fallback for non-pre-rendered paths
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { category, subcategory, productId } = context.params!;

    console.log(category); // "fresh"
    console.log(subcategory); // "dairy"
    console.log(productId); // "123"


    const product = allData.find(
        (p) =>
            p.category === category &&
            p.subCategory === subcategory &&
            p.id.toString() === productId // Convert productId to number
    );

    return {
        props: {
            product: product || null, // Pass product data or null
        },
        revalidate: 10, // Revalidate data every 10 seconds
    };
};

export default ProductDetails;
