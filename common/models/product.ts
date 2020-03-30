import ProductOption from "./productOption";

export enum ProductType {
  // 배송되는 실물 상품
  Item,
  // 배송이 없는 서비스
  Service 
}

/**
 * @description 상품
 */
export default interface Product {
  // pk
  id: number;
  // 상품 형태
  type: ProductType;
  // 상품명
  title: string;
  // 상품 
  description: string;
  // 표시 가격
  basePrice: number;
  // 표시 여부
  display: boolean;
  // 제품 옵션
  options: ProductOption[];
}