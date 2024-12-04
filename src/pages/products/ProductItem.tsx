// components/ProductItem.tsx
import React from "react";
import Link from "next/link";
import { Product } from "@/data/Product.types";
import Image from "next/image";
import styles from "./ProductItem.module.css";

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <Link
            href={`/products/${product.category}/${product.subCategory}/${product.id}`}
            passHref
            className={styles.productItem}
        >
            <div className={styles.productImage}>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300}
                    height={300}
                />
            </div>
            <div className={styles.productDetails}>
                <p className={styles.cate}>{product.categoryDetail}</p>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.brand}>{product.brand}</p>
            </div>
        </Link>
    );
};

export default ProductItem;
