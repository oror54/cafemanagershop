import { Product } from "@/data/Product.types";
import milk from "./milk";
import dairy from "./dairy";
import others from "./others";

// 각 카테고리 배열을 Product[] 타입으로 선언
const Fresh: { all: Product[]; milk: Product[]; dairy: Product[]; others: Product[] } = {
    milk,      // milk 배열 (Product[] 타입)
    dairy,     // dairy 배열 (Product[] 타입)
    others,    // others 배열 (Product[] 타입)
    all: [...milk, ...dairy, ...others], // all 배열, 세 배열을 합친 것
};

export default Fresh;
