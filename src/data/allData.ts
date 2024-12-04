import milk01 from "$/assets/images/sub/fresh/milk/product.jpg";
import item01 from "$/assets/images/sub/fresh/dairy/item01.jpg";
import item02 from "$/assets/images/sub/fresh/dairy/item02.jpg";

type dataType = {
  id: number;
  category: string;
  subCategory: string;
  productName: string;
  imgUrl: HTMLImageElement | string;
  path: string;
};

const allData: dataType = [
  {
    id: 0,
    category: "fresh",
    categoryDetail: "mlik",
    name: "서울 흰우유(1,000mL)",
    brand: "서울우유",
    imageUrl: milk01,
    description: "고소한 맛의 서울 흰우유.",
    url: "",
  },
  {
    id: 1,
    category: "Fresh",
    categoryDetail: "dairy",
    name: "신선한 우유로 만든 생크림",
    brand: "서울우유",
    imageUrl: item01,
    description: "생크림.",
    url: "",
  },
  {
    id: 2,
    category: "Fresh",
    categoryDetail: "dairy",
    name: "서울우유 연유",
    brand: "서울우유",
    imageUrl: item02,
    description: "연유",
    url: "",
  },
  {
    id: 3,
    category: "Fresh",
    categoryDetail: "other",
    name: "181라운지 더치커피",
    brand: "(주)빈커스텀컴퍼니",
    imageUrl: item01,
    description: "생크림.",
    url: "",
  },
  {
    id: 4,
    category: "Fresh",
    categoryDetail: "Fruit",
    name: "사과",
    brand: "청도",
    imageUrl: item01,
    description: "신선한 사과",
    url: "",
  },
  {
    id: 5,
    category: "Fresh",
    categoryDetail: "Fruit",
    name: "귤(3kg)",
    brand: "제주도",
    imageUrl: item01,
    description: "호윤이가 딴 귤",
    url: "",
  },
];
