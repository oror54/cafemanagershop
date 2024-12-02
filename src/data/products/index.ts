import { Fresh } from "./Fresh";

// 모든 카테고리 데이터 통합
export const productsByCategory = {
    Fresh,
    // 다른 카테고리 추가 가능
};

// 모든 데이터를 하나의 배열로 통합 (옵션)
export const allProducts = [...Fresh.all,];
