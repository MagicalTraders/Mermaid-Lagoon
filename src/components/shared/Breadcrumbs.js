import React from 'react';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import { emphasize, withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    '&:active': {
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      boxShadow:       theme.shadows[1],
    },
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    backgroundColor: theme.palette.grey[100],
    color:           theme.palette.grey[800],
    fontWeight:      theme.typography.fontWeightRegular,
    height:          theme.spacing(3),
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: 35 }}>
      <StyledBreadcrumb
        component="a"
        href="#"
        icon={<HomeIcon fontSize="small" />}
        label="Home"
        onClick={handleClick}
      />
      <StyledBreadcrumb
        component="a" href="#" label="Catalog"
        onClick={handleClick}
      />
      <StyledBreadcrumb
        deleteIcon={<ExpandMoreIcon />}
        label="Accessories"
        onClick={handleClick}
        onDelete={handleClick}
      />
    </Breadcrumbs>
  );
}
