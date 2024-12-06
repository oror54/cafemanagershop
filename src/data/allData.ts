import milk01 from "$/assets/images/sub/fresh/milk/item01_서울우유 신림5동_우유.png";
import dairy01 from "$/assets/images/sub/fresh/dairy/item01_서울우유 신림5동_생크림.png";
import dairy02 from "$/assets/images/sub/fresh/dairy/item02_서울우유 신림5동_연유.png";
import others01 from "$/assets/images/sub/fresh/others/item01_빈커스텀컴퍼니_181라운지 더치커피.png";
import othersDetaol01 from "$/assets/images/sub/fresh/milk/detail01.jpg";
import others02 from "$/assets/images/sub/fresh/others/item02_빈커스텀컴퍼니_181라운지 디카페인 더치커피.png";
import others03 from "$/assets/images/sub/fresh/others/item03_GSHCOFFEE_예가체프콜드브루.png";
import others04 from "$/assets/images/sub/fresh/others/item04_로스팅코리아_콜드브루 디카페인.png";
import others05 from "$/assets/images/sub/fresh/others/item05_로스팅코리아_콜드브루 블렌딩.png";
import others06 from "$/assets/images/sub/fresh/others/item06_솔룸커피로스터스_솔룸다크콜드브루원액.png";
import others07 from "$/assets/images/sub/fresh/others/item07_솔룸커피로스터스_콜롬비아디카페인콜드브루원액.png";

import defaultImage from "$/default-image.png";
import { StaticImageData } from "next/image";

type dataType = {
  id: number;
  category: string;
  subCategory: string;
  brand: string;
  name: string;
  imageUrl: string | StaticImageData;
  description: string | StaticImageData;
  categoryDetail: string;
  categoryKo: string;
  url: string;
  best: boolean,
};

export const allData: dataType[] = [
  {
    id: 0,
    category: "fresh",
    subCategory: "mlik",
    name: "서울 흰우유(1,000mL)",
    brand: "서울우유",
    imageUrl: milk01,
    description: defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '우유',
    url: "",
    best: true,
  },
  {
    id: 1,
    category: "fresh",
    subCategory: "dairy",
    name: "신선한 우유로 만든 생크림",
    brand: "서울우유",
    imageUrl: dairy01,
    description: defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '유제품',
    url: "",
    best: true,
  },
  {
    id: 2,
    category: "fresh",
    subCategory: "dairy",
    name: "서울우유 연유",
    brand: "서울우유",
    imageUrl: dairy02,
    description: defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '유제품',
    url: "",
    best: true,
  },
  {
    id: 3,
    category: "fresh",
    subCategory: "other",
    name: "181라운지 더치커피",
    brand: "(주)빈커스텀컴퍼니",
    imageUrl: others01,
    description: othersDetaol01,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
  },
  {
    id: 4,
    category: "fresh",
    subCategory: "other",
    name: "181라운지 디카페인 더치커피",
    brand: "(주)빈커스텀컴퍼니",
    imageUrl: others02,
    description: defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
  },
  {
    id: 5,
    category: "fresh",
    subCategory: "other",
    name: "예가체프콜드브루",
    brand: "GSHCOFFEE",
    imageUrl: others03,
    description: defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
  },
  {
    id: 6,
    category: "fresh",
    subCategory: "other",
    name: "콜드브루 디카페인",
    brand: "로스팅코리아",
    imageUrl: others04,
    description: defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
  },
  {
    id: 7,
    category: "fresh",
    subCategory: "other",
    name: "콜드브루 블렌딩",
    brand: "로스팅코리아",
    imageUrl: others05,
    description: defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
  },
  {
    id: 8,
    category: "fresh",
    subCategory: "other",
    name: "솔룸다크콜드브루원액",
    brand: "솔룸커피로스터스",
    imageUrl: others06,
    description: defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
  },
  {
    id: 9,
    category: "fresh",
    subCategory: "other",
    name: "콜롬비아디카페인콜드브루원액",
    brand: "솔룸커피로스터스",
    imageUrl: others07,
    description: defaultImage,
    categoryKo: '콜드브루',
    categoryDetail: '기타',
    url: "",
    best: true,
  },

];
