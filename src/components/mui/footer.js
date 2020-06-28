import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
  },
}));

const FooterEx = () => {
  const classes = useStyles();

  return (
    <footer
      className={classes.root}
      style={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        textAlign: 'center',
        backgroundColor: '#333',
        color: 'white',
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <div className={classes.paper}>
              <Typography variant="h6" gutterBottom>
                Magical Traders
              </Typography>
              <p>
                We are a not-for-profit open-source React ecommerce
                educational tool.
              </p>
            </div>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <div className={classes.paper}>
              <ul>
                <li>xs=12 sm=6</li>
                <li>xs=12 sm=6</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <div className={classes.paper}>
              <ul>
                <li>xs=12 sm=6</li>
                <li>xs=12 sm=6</li>
              </ul>
            </div>
          </Grid>
          <Grid item md={2}>
            <div className={classes.paper}>
              <ul>
                <li>xs=12 sm=6</li>
                <li>xs=12 sm=6</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={classes.paper}>
              <u>Powered By</u>
              <br />
              <a href="https://www.vercel.com?utm_source=magical_traders">
                <svg
                  style={{ maxWidth: 115 }}
                  width="283"
                  height="64"
                  viewBox="0 0 283 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            {' '}
            <p style={{ color: '#ccc' }}>
              Characters, Stories, Books, Shows, Films, et al are copyright
              of their respective owners.
            </p>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

FooterEx.propTypes = {};
FooterEx.defaultProps = {};

export default FooterEx;
