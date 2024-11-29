// data/products.ts
import { Product } from "@/data/Product.types";
import item01 from "$/assets/images/sub/category01/product.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "서울 흰우유(1,000mL)",
    brand: "서울우유",
    imageUrl: item01,
    category: "신선식품",
    categoryDetail: "우유",
    description: "",
    url:"#"
  },
];
