// components/ProductList.tsx
import React from "react";
import { Product } from "@/data/Product.types";  // Import the Product type
import ProductItem from "./ProductItem"; // Import the ProductItem component

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="product-list">
            {products.length > 0 ? (
                products.map((product) => <ProductItem key={product.id} product={product} />)
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
};

export default ProductList;
