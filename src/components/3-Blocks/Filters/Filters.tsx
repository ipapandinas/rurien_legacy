import React, { ChangeEvent } from 'react';
import {
  FormControl,
  MenuItem,
  Select,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useCategoriesQuery } from '../../../queries';
import { categoryNameToValue } from '../../../services';
import {
  ALL_CATEGORIES,
  ALL_YEARS,
  COLOR_MARINE_BLUE,
  FONT_POPPINS_SEMI_BOLD,
} from '../../../settings';

const SELECT_CATEGORY_TYPE = 'SELECT_CATEGORY_TYPE';
const SELECT_YEAR_TYPE = 'SELECT_YEAR_TYPE';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControlCategory: {
      margin: theme.spacing(1),
      minWidth: '13rem',
    },
    formControlYear: {
      margin: theme.spacing(1),
      minWidth: '9rem',
    },
    icon: {
      color: 'black',
      right: 3,
      position: 'absolute',
      userSelect: 'none',
      pointerEvents: 'none',
    },
    paper: {
      borderRadius: 12,
    },
    list: {
      paddingTop: 0,
      paddingBottom: 0,
      background: 'white',
      '& li': {
        fontSize: '1.6rem',
        fontWeight: 400,
        paddingTop: 12,
        paddingBottom: 12,
      },
      '& li:hover': {
        background: COLOR_MARINE_BLUE,
        color: 'white',
      },
      '& li.Mui-selected': {
        color: 'white',
        background: COLOR_MARINE_BLUE,
        fontFamily: FONT_POPPINS_SEMI_BOLD,
      },
      '& li.Mui-selected:hover': {
        background: COLOR_MARINE_BLUE,
        color: 'white',
      },
    },
  })
);

const useSelectStyles = (variant: string) => {
  const classes = makeStyles(() =>
    createStyles({
      select: {
        minWidth: variant === SELECT_CATEGORY_TYPE ? '13rem' : '9rem',
        fontFamily: FONT_POPPINS_SEMI_BOLD,
        fontSize: '1.6rem',
        borderStyle: 'none',
        paddingTop: '1.6rem',
        paddingLeft: '1rem',
        paddingRight: '0 !important',
      },
    })
  );

  return classes().select;
};

interface Category {
  nombre: string;
  strapiId: number;
}

interface Props {
  category: number;
  handleCategoryChange: (event: ChangeEvent<{ value: unknown }>) => void;
  handleYearChange: (event: ChangeEvent<{ value: unknown }>) => void;
  year: number;
}

export default function Filters({
  category,
  handleCategoryChange,
  handleYearChange,
  year,
}: Props) {
  const categories = useCategoriesQuery();
  const classes = useStyles();
  const categorySelectClasses = useSelectStyles(SELECT_CATEGORY_TYPE);
  const yearSelectClasses = useSelectStyles(SELECT_YEAR_TYPE);

  const iconComponent = () => {
    return <ExpandMoreIcon className={classes.icon} />;
  };

  const menuProps = {
    classes: {
      paper: classes.paper,
      list: classes.list,
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  };

  return (
    <div className="Filters">
      <FormControl className={classes.formControlCategory}>
        <Select
          classes={{ root: categorySelectClasses }}
          disableUnderline
          IconComponent={iconComponent}
          id="category-select"
          labelId="category-select"
          MenuProps={menuProps}
          value={category}
          onChange={handleCategoryChange}
        >
          <MenuItem value={0}>
            <em>{ALL_CATEGORIES}</em>
          </MenuItem>
          {categories.map(({ nombre, strapiId }: Category) => (
            <MenuItem
              key={strapiId}
              value={categoryNameToValue(nombre.toLocaleUpperCase())}
            >
              {nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControlYear}>
        <Select
          classes={{ root: yearSelectClasses }}
          disableUnderline
          IconComponent={iconComponent}
          id="year-select"
          labelId="year-select"
          MenuProps={menuProps}
          value={year}
          onChange={handleYearChange}
        >
          <MenuItem value={0}>
            <em>{ALL_YEARS}</em>
          </MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={201820}>2018 /20</MenuItem>
          <MenuItem value={200917}>2009 /17</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
