import React from "react";
import ProductList from "./ProductList";
import { products } from "@/data/products";
import styles from "./ProductPage.module.css";

export default function ProductsPage() {
    return (
        <main>
            <div className={styles.sub}>
                <h1>Our Products</h1>
                <ProductList products={products} />
            </div>
        </main >
    );
}