import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

import { useDevice } from '../../../hooks';
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
  work: WorkItemInterface;
}

export default function WorkItem({ work }: Props) {
  const {
    ano: year,
    categoria: category,
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
        <div className="WorkItem__content">
          {title && <div className="WorkItem__title">{title}</div>}
          {year && <div className="WorkItem__year">{year}</div>}
          <div className="WorkItem__technicals">
            {technic && <div className="WorkItem__technic">{technic}</div>}
            {size && <div className="WorkItem__size">{size}</div>}
          </div>
        </div>
        {category && category.nombre && (
          <div className="WorkItem__category">
            {category.nombre.toLocaleUpperCase()}
          </div>
        )}
      </div>
    </div>
  );
}
