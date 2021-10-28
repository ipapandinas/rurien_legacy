import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

import { useDevice } from '../../../hooks';
import { categoryNameToValue } from '../../../services';
import {
  WORK_SLIDER_HEIGHT_SM,
  WORK_SLIDER_WIDTH,
  WORK_SLIDER_WIDTH_SM,
} from '../../../settings';

export type WorkItemInterface = {
  ano: string;
  categoria: {
    nombre: string;
  };
  dimension: string;
  obra: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  strapiId: number;
  tecnica: string;
  titulo: string;
};

interface Props {
  category: number;
  setCategory: (category: number) => void;
  work: WorkItemInterface;
}

export default function WorkItem({ category, setCategory, work }: Props) {
  const {
    ano: year,
    categoria: strapiCategory,
    dimension: size,
    obra: media,
    tecnica: technic,
    titulo: title,
  } = work;
  const { isMobile } = useDevice();

  const sliderHeight = isMobile ? WORK_SLIDER_HEIGHT_SM : WORK_SLIDER_WIDTH;
  const sliderWidth = isMobile ? WORK_SLIDER_WIDTH_SM : WORK_SLIDER_WIDTH;
  const ratio = media.childImageSharp.fluid.aspectRatio;
  const height = Number(sliderHeight) / ratio;
  const width = Number(sliderWidth) * ratio;

  const style = {
    height: ratio >= 1 ? `${height}px` : `${sliderHeight}px`,
    width: ratio <= 1 ? `${width}px` : `${sliderWidth}px`,
  };

  const categoryName =
    strapiCategory && strapiCategory.nombre.toLocaleUpperCase();

  const isCategoryChip = categoryName && category === 0;
  const CategoryChip = () => (
    <button
      className="WorkItem__category"
      type="button"
      onClick={() => setCategory(categoryNameToValue(categoryName))}
    >
      {categoryName}
    </button>
  );

  return (
    <div className="WorkItem">
      {media && (
        <div className="WorkItem__image" style={style}>
          <Img
            className="WorkItem__gatsbyImage"
            alt={title}
            fluid={media.childImageSharp.fluid}
          />
        </div>
      )}

      <div className="WorkItem__info">
        {isMobile && isCategoryChip && <CategoryChip />}
        <div className="WorkItem__content">
          {title && <div className="WorkItem__title">{title}</div>}
          {year && <div className="WorkItem__year">{year}</div>}
          <div className="WorkItem__technicals">
            {technic && <div className="WorkItem__technic">{technic}</div>}
            {size && <div className="WorkItem__size">{size}</div>}
          </div>
        </div>
        {!isMobile && isCategoryChip && <CategoryChip />}
      </div>
    </div>
  );
}
