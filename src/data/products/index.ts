import { Product } from "../Product.types";
import Fresh from "./Fresh";

// 여러 카테고리가 있을 경우, productsByCategory에 추가할 수 있습니다.
export const productsByCategory: Record<string, Product[]> = {
    Fresh: Fresh.all,  // Fresh 카테고리의 모든 제품
    // 다른 카테고리도 추가할 수 있습니다.
    // 예시:
    // Dairy: Dairy.all,
    // Others: Others.all,
};

export const allProducts: Product[] = [...Fresh.all];  // Fresh.all을 복사하여 allProducts에 저장
