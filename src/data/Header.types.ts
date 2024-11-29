import { StaticImageData } from "next/image";

export interface SubItemProps {
  name: string;  // 서브 카테고리 이름
  icon: string;  // 서브 카테고리 아이콘 URL
}

export interface MenuItemProps {
  title: string;  // 카테고리 이름
  subItems: SubItemProps[];  // 서브 카테고리 목록
  imageUrl: StaticImageData;  // 카테고리 이미지 URL
}
