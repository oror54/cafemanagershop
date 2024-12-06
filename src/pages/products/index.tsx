import React from "react";
import ProductList from "./ProductList";
import { allProducts } from "src/data/products";
import styles from "./ProductPage.module.css";

export default function ProductsPage() {
    return (
        <main>
            <div className={styles.sub}>
                <ProductList products={allProducts} />
            </div>
        </main>
    );
}