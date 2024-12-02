// components/ProductItem.tsx
import React from "react";
import { Product } from "@/data/Product.types"; // Assuming you have a Product type defined
import Image from "next/image";
import styles from "./ProductItem.module.css"; // Create styles for the product item

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div className={styles.productItem}>
            <div className={styles.productImage}>
                <Image
                    src={product.imageUrl} // Make sure your product has an imageUrl
                    alt={product.name}
                    width={300}
                    height={300}
                    layout="responsive"
                />
            </div>
            <div className={styles.productDetails}>
                <p>{product.categoryDetail}</p>
                <h3>{product.name}</h3>
                <p>{product.brand}</p>
            </div>
        </div>
    );
};

export default ProductItem;
