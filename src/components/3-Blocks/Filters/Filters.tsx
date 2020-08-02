import React, { ChangeEvent, useState } from 'react';
import {
  FormControl,
  MenuItem,
  Select,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { COLOR_GREY_BLUE, FONT_POPPINS_SEMI_BOLD } from '../../../settings';

const SELECT_CATEGORY_TYPE = 'SELECT_CATEGORY_TYPE';
const SELECT_YEAR_TYPE = 'SELECT_YEAR_TYPE';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControlCategory: {
      margin: theme.spacing(1),
      minWidth: 100,
    },
    formControlYear: {
      margin: theme.spacing(1),
      minWidth: 70,
    },
    icon: {
      color: 'black',
      right: 7,
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
        fontWeight: 200,
        paddingTop: 12,
        paddingBottom: 12,
      },
      '& li:hover': {
        background: COLOR_GREY_BLUE,
        color: 'white',
      },
      '& li.Mui-selected': {
        color: 'white',
        background: COLOR_GREY_BLUE,
        fontFamily: FONT_POPPINS_SEMI_BOLD,
      },
      '& li.Mui-selected:hover': {
        background: COLOR_GREY_BLUE,
        color: 'white',
      },
    },
  })
);

const useSelectStyles = (variant: string) => {
  const classes = makeStyles(() =>
    createStyles({
      select: {
        minWidth: variant === SELECT_CATEGORY_TYPE ? 100 : 60,
        fontFamily: FONT_POPPINS_SEMI_BOLD,
        fontSize: '1.6rem',
        borderStyle: 'none',
        paddingTop: '1.6rem',
        paddingRight: '0 !important',
      },
    })
  );

  return classes().select;
};

export default function Filters() {
  const classes = useStyles();
  const categorySelectClasses = useSelectStyles(SELECT_CATEGORY_TYPE);
  const yearSelectClasses = useSelectStyles(SELECT_YEAR_TYPE);
  const [category, setCategory] = useState('10');
  const [year, setYear] = useState('10');

  const handleCategoryChange = (event: ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };

  const handleYearChange = (event: ChangeEvent<{ value: unknown }>) => {
    setYear(event.target.value as string);
  };

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
          <MenuItem value={10}>MAR</MenuItem>
          <MenuItem value={20}>TIERRA</MenuItem>
          <MenuItem value={30}>ASFALTO</MenuItem>
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
          <MenuItem value={10}>2020</MenuItem>
          <MenuItem value={20}>2019</MenuItem>
          <MenuItem value={30}>2018</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
