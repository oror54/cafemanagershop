import { Product } from "@/data/Product.types";
import milk from "./milk";
import dairy from "./dairy";
import others from "./others";

const Fresh: { all: Product[]; milk: Product[]; dairy: Product[]; others: Product[] } = {
    all: [...milk, ...dairy, ...others],
    milk,
    dairy,
    others,
};

export default Fresh;
