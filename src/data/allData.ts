import milk01 from "$/assets/images/sub/fresh/milk/item01.jpg";
import item01 from "$/assets/images/sub/fresh/dairy/item01.jpg";
import item02 from "$/assets/images/sub/fresh/dairy/item02.jpg";
import { StaticImageData } from "next/image";

type dataType = {
  id: number;
  category: string;
  subCategory: string;
  brand: string;
  name: string;
  imageUrl: string | StaticImageData;
  description: string;
  categoryDetail: string;
  categoryKo: string;
  url: string;
};

export const allData: dataType[] = [
  {
    id: 0,
    category: "fresh",
    subCategory: "mlik",
    name: "서울 흰우유(1,000mL)",
    brand: "서울우유",
    imageUrl: milk01,
    description: "고소한 맛의 서울 흰우유.",
    categoryKo: '신선식품',
    categoryDetail: '우유',
    url: "",
  },
  {
    id: 1,
    category: "fresh",
    subCategory: "dairy",
    name: "신선한 우유로 만든 생크림",
    brand: "서울우유",
    imageUrl: item01,
    description: "생크림.",
    categoryKo: '신선식품',
    categoryDetail: '유제품',
    url: "",
  },
  {
    id: 2,
    category: "fresh",
    subCategory: "dairy",
    name: "서울우유 연유",
    brand: "서울우유",
    imageUrl: item02,
    description: "연유",
    categoryKo: '신선식품',
    categoryDetail: '유제품',
    url: "",
  },
  {
    id: 3,
    category: "fresh",
    subCategory: "other",
    name: "181라운지 더치커피",
    brand: "(주)빈커스텀컴퍼니",
    imageUrl: item01,
    description: "생크림.",
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
  },

];
