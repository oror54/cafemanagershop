import { MenuItemProps } from "./Header.types";

import category01 from "$/assets/images/sub/cate01.jpg";
import category02 from "$/assets/images/sub/cate02.jpg";
import category03 from "$/assets/images/sub/cate03.jpg";
import category04 from "$/assets/images/sub/cate04.jpg";
import category05 from "$/assets/images/sub/cate05.jpg";

import cate01Sub01 from "$/assets/images/sub/cate01-sub01.svg";
import cate01Sub02 from "$/assets/images/sub/cate01-sub02.svg";
import cate01Sub03 from "$/assets/images/sub/cate01-sub03.svg";
import cate01Sub04 from "$/assets/images/sub/cate01-sub04.svg";

import cate02Sub01 from "$/assets/images/sub/cate02-sub01.svg";
import cate02Sub02 from "$/assets/images/sub/cate02-sub02.svg";
import cate02Sub03 from "$/assets/images/sub/cate02-sub03.svg";

import cate03Sub01 from "$/assets/images/sub/cate03-sub01.svg";
import cate03Sub02 from "$/assets/images/sub/cate03-sub02.svg";
import cate03Sub03 from "$/assets/images/sub/cate03-sub03.svg";
import cate03Sub04 from "$/assets/images/sub/cate03-sub04.svg";

import cate04Sub01 from "$/assets/images/sub/cate04-sub01.svg";
import cate04Sub02 from "$/assets/images/sub/cate04-sub02.svg";
import cate04Sub03 from "$/assets/images/sub/cate04-sub03.svg";
import cate04Sub04 from "$/assets/images/sub/cate04-sub04.svg";

export const menuItems: MenuItemProps[] = [
  {
    title: "신선제품",
    realTitle: "fresh",
    subItems: [
      { name: "우유", realName: "mlik", icon: cate01Sub01 },
      { name: "과일", realName: "fruit", icon: cate01Sub02 },
      { name: "유제품", realName: "dairy", icon: cate01Sub03 },
      { name: "기타", realName: "other", icon: cate01Sub04 },
    ],
    imageUrl: category01,
  },
  {
    title: "원두",
    realTitle: "bean",
    subItems: [
      { name: "약배전", realName: "lightRoast", icon: cate02Sub01 },
      { name: "중배전", realName: "mediumRoast", icon: cate02Sub02 },
      { name: "강배전", realName: "darkRoast", icon: cate02Sub03 },
    ],
    imageUrl: category02,
  },
  {
    title: "디저트",
    realTitle: "desert",
    subItems: [
      { name: "케익", realName: "cake", icon: cate03Sub01 },
      { name: "생지", realName: "rawDough", icon: cate03Sub02 },
      { name: "구움과자", realName: "bakedGoods ", icon: cate03Sub03 },
      { name: "기타", realName: "other", icon: cate03Sub04 },
    ],
    imageUrl: category03,
  },
  {
    title: "식재료",
    realTitle: "ingredient",
    subItems: [
      { name: "케익", realName: "cake", icon: cate03Sub01 },
      { name: "생지", realName: "rawDough", icon: cate03Sub02 },
      { name: "구움과자", realName: "bakedGoods", icon: cate03Sub03 },
      { name: "기타", realName: "other", icon: cate03Sub04 },
    ],
    imageUrl: category04,
  },
  {
    title: "부자재",
    realTitle: "subMaterial",
    subItems: [
      { name: "일회용품", realName: "disposableItems", icon: cate04Sub01 },
      { name: "식기", realName: "cutlery", icon: cate04Sub02 },
      { name: "베이킹", realName: "baking", icon: cate04Sub03 },
      { name: "기타", realName: "other", icon: cate04Sub04 },
    ],
    imageUrl: category05,
  },
];
