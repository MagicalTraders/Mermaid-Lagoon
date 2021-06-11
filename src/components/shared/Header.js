import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link';

import TaxTerms from './nav/TaxTerms';

const useStyles = makeStyles((theme) => ({
  inputInput: {
    padding:                      theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft:                  `calc(1em + ${theme.spacing(4)}px)`,
    transition:                   theme.transitions.create('width'),
    width:                        '100%',
    [theme.breakpoints.up('sm')]: {
      '&:focus': {
        width: '20ch',
      },
      width: '12ch',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  root: {
    flexGrow: 1,
  },
  search: {
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    backgroundColor:              fade(theme.palette.common.white, 0.15),
    borderRadius:                 theme.shape.borderRadius,
    marginLeft:                   0,
    position:                     'relative',
    width:                        '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width:      'auto',
    },
  },
  searchIcon: {
    alignItems:     'center',
    display:        'flex',
    height:         '100%',
    justifyContent: 'center',
    padding:        theme.spacing(0, 2),
    pointerEvents:  'none',
    position:       'absolute',
  },
  title: {
    display:                      'none',
    flexGrow:                     1,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container style={{ maxWidth: '100%', padding: '0' }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <TaxTerms />

            <Link href="/">
              <Typography className={classes.title} variant="h6" noWrap>
                Magical Traders
              </Typography>
            </Link>

            <Typography className={classes.title} variant="h6" noWrap>
              Adults
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
              Kids
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
              Baby
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
              Everyday
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
              Photos
            </Typography>
            <Link href="/protected-page">
              <Typography className={classes.title} variant="h6" noWrap>
                Toys & Games
              </Typography>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                classes={{
                  input: classes.inputInput,
                  root:  classes.inputRoot,
                }}
                inputProps={{ 'aria-label': 'search' }}
                placeholder="Search…"
              />
            </div>

            {/* {user ? (
              <>
                <li>
                  <a data-testid="logout" href="/api/auth/logout">
                    <IconButton
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      aria-label="account of current user"
                      color="inherit"
                    >
                      Logout
                    </IconButton>
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a data-testid="login" href="/api/auth/login">
                    <IconButton
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      aria-label="account of current user"
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </a>
                </li>
              </>
            )} */}
          </Toolbar>
        </Container>
      </AppBar>

    </Container>
  );
};

export default Header;
