import {
  ALL_CATEGORIES,
  CATEGORY_ASFALTO,
  CATEGORY_DIGITAL,
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
    case 5:
      return CATEGORY_DIGITAL;
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
    case CATEGORY_DIGITAL:
      return 5;
    default:
      return 0;
  }
}

export function yearDecode(year: number) {
  if (year === 200916) {
    return '2009 - 2016';
  } else if (year === 201719) {
    return '2017 - 2019';
  } else {
    return year.toString();
  }
}

export function yearMapping(year: string) {
  const yearValue = Number(year);
  if (yearValue >= 2009 && yearValue < 2017) {
    return 200916;
  } else if (yearValue >= 2017 && yearValue < 2020) {
    return 201719;
  } else {
    return yearValue;
  }
}
