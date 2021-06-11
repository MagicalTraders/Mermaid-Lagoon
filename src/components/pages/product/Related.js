import React from 'react';

import {
  Box, Chip, Grid, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  chip: {
    backgroundColor: '#efefef',
    fontSize:        16,
    margin:          theme.spacing(0.5),
  },
  label: {
    marginTop: 3,
  },
  root: {
    display:        'flex',
    flexWrap:       'wrap',
    justifyContent: 'left',
    listStyle:      'none',
    margin:         0,
  },
}));

export default function ChipsArray({ chipData, label }) {
  const classes = useStyles();

  return (
    <Grid style={{ marginBottom: 5 }} container>
      <Grid xs={2} item>
        <Typography className={classes.label} variant="h6">
          {label}
        </Typography>
      </Grid>
      <Grid item xs>
        <Box className={classes.root}>
          {chipData.map((data) => {
            let icon;
            // console.log('chip data', data);

            if (data.label === 'React') {
              icon = <TagFacesIcon />;
            }

            return (
              <li key={data.slug}>
                <Link href={`/cast/${data.slug}`}>
                  <Chip
                    className={classes.chip}
                    icon={icon}
                    label={data.name}
                  />
                </Link>
              </li>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}
