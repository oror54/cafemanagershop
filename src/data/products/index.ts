import { Product } from "../Product.types";
import Fresh from "./Fresh";

export const productsByCategory: Record<string, Product[]> = {
    Fresh: Fresh.all,
};

export const allProducts = [...Fresh.all];
