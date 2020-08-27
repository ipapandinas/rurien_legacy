import React, { ChangeEvent, useMemo, useState } from 'react';

import { useWorkQuery } from '../../../queries';
import { categoryValueToName } from '../../../services';
import { ALL_CATEGORIES } from '../../../settings';

import { Filters, Slickslider } from '../../3-Blocks';

interface Work {
  ano: string;
  categoria: any;
}

export default function Work() {
  const [category, setCategory] = useState(0);
  const [year, setYear] = useState(0);

  const work = useWorkQuery();

  const handleCategoryChange = (event: ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as number);
  };

  const handleYearChange = (event: ChangeEvent<{ value: unknown }>) => {
    setYear(event.target.value as number);
  };

  const imagesFiltered = useMemo(
    () =>
      work.reverse().filter(({ categoria, ano: yearType }: Work) => {
        if (!categoria) {
          return null;
        }

        const { nombre: categoryType } = categoria;

        if (!categoryType) {
          return null;
        }

        return (
          (categoryValueToName(category) === categoryType.toLocaleUpperCase() ||
            categoryValueToName(category) === ALL_CATEGORIES) &&
          (year === Number(yearType) || year === 0)
        );
      }),
    [category, year]
  );

  return (
    <div className="Work fade-in">
      <div className="Work__header">
        <Filters
          category={category}
          handleCategoryChange={handleCategoryChange}
          handleYearChange={handleYearChange}
          year={year}
        />
      </div>
      <div className="Work__content">
        <Slickslider
          category={category}
          setCategory={setCategory}
          works={imagesFiltered}
          year={year}
        />
      </div>
    </div>
  );
}
