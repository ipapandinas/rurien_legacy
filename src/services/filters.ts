import {
  ALL_CATEGORIES,
  CATEGORY_ASFALTO,
  CATEGORY_MAR,
  CATEGORY_SER,
  CATEGORY_TIERRA,
} from '../settings';

export function categoryValueToName(category: number) {
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
      return CATEGORY_SER;
    default:
      return ALL_CATEGORIES;
  }
}

export function categoryNameToValue(category: string) {
  switch (category) {
    case ALL_CATEGORIES:
      return 0;
    case CATEGORY_MAR:
      return 1;
    case CATEGORY_TIERRA:
      return 2;
    case CATEGORY_ASFALTO:
      return 3;
    case CATEGORY_SER:
      return 4;
    default:
      return 0;
  }
}
