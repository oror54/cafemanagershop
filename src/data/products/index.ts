import { Product } from "../Product.types"; 
import Fresh from "./Fresh"; // Fresh 객체 임포트

// 여러 카테고리가 있을 경우, productsByCategory에 추가할 수 있습니다.
export const productsByCategory: Record<string, Product[]> = {
    // Others: Others.all,
};

// Fresh.all을 allProducts에 복사
export const allProducts: Product[] = [...Fresh.all];
