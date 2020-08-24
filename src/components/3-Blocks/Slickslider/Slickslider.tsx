import React from 'react';
import Slider from 'react-slick';
import Img from 'gatsby-image';

import { categoryMapping } from '../../../services';
import { ALL_CATEGORIES } from '../../../settings';

import { WorkItem, WorkItemInterface } from '../../2-Molecules';

interface Props {
  category: number;
  works: Array<WorkItemInterface>;
  year: number;
}

export default function Slickslider({ category, works, year }: Props) {
  const settings = {
    // eslint-disable-next-line react/display-name
    customPaging: function (i: number) {
      const work = works.find(({ strapiId }, idx) => idx === i);
      if (!work) {
        return <div>?</div>;
      }

      const { obra, titulo } = work;
      return (
        obra && (
          <a>
            <Img
              className="Slickslider__paging"
              alt={titulo}
              fluid={obra.childImageSharp.fluid}
            />
          </a>
        )
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dynamicTitle = () => {
    if (categoryMapping(category) === ALL_CATEGORIES && year === 0) {
      return '';
    } else if (categoryMapping(category) !== ALL_CATEGORIES && year === 0) {
      return (
        <span className="Title__category">{categoryMapping(category)}</span>
      );
    } else if (categoryMapping(category) === ALL_CATEGORIES && year !== 0) {
      return (
        <span>
          Obras de <span className="Title__year">{year}</span>
        </span>
      );
    }

    return (
      <span>
        <span className="Title__category">{categoryMapping(category)}</span> de{' '}
        <span className="Title__year">{year}</span>
      </span>
    );
  };

  const title =
    !works || works.length === 0
      ? 'Ninguna obra corresponde a tu criterio'
      : dynamicTitle();

  categoryMapping(category);

  return (
    <div className="Slickslider">
      <h2 className="Slickslider__title">{title}</h2>
      <Slider {...settings}>
        {works.map((work, idx) => (
          <WorkItem work={work} key={idx} />
        ))}
      </Slider>
    </div>
  );
}
