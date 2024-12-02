import milk from "./milk";
import fruits from "./fruits";
import dairy from "./dairy";
import others from "./others";

export const Fresh = {
    all: [...milk, ...fruits, ...dairy, ...others], // 전체 데이터를 하나의 배열로 통합
    milk,
    fruits,
    dairy,
    others,
};
