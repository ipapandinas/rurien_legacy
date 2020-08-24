import {
  ALL_CATEGORIES,
  CATEGORY_ASFALTO,
  CATEGORY_FIGURATIVO,
  CATEGORY_MAR,
  CATEGORY_TIERRA,
} from '../settings';

export function categoryMapping(category: number) {
  switch (category) {
    case 0:
      return ALL_CATEGORIES;
    case 1:
      return CATEGORY_MAR;
    case 2:
      return CATEGORY_TIERRA;
    case 3:
      return CATEGORY_ASFALTO;
    case 4:
      return CATEGORY_FIGURATIVO;
    default:
      return ALL_CATEGORIES;
  }
}
