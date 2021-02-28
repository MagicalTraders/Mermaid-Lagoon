import React from 'react';

import {
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
  MenuItem,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DraftsIcon from '@material-ui/icons/Drafts';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import Link from 'next/link';

const StyledMenu = withStyles((theme) => ({
  paper: {
    border: '1px solid #d3d4d5',
    width:  250,
  },
}))((props) => (
  <Menu
    anchorOrigin={{
      horizontal: 'left',
      vertical:   'bottom',
    }}
    elevation={0}
    getContentAnchorEl={null}
    transformOrigin={{
      horizontal: 'left',
      vertical:   'top',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
      backgroundColor: theme.palette.primary.main,
    },
  },

}))(MenuItem);

const StyledSubMenuHeader = withStyles((theme) => ({
  root: {
    backgroundColor: '#efefef',
    color:           theme.palette.primary.main,
    marginTop:       '-8px',
    padding:         '6px 15px',
    textTransform:   'capitalize',
  },
}))(Typography);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        aria-label="open drawer"
        color="inherit"
        edge="start"
        variant="contained"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <StyledMenu
        anchorEl={anchorEl}
        id="menu-appbar"
        open={Boolean(anchorEl)}
        keepMounted
        onClose={handleClose}
      >

        <StyledSubMenuHeader component="p" variant="h6" gutterBottom>
          Categories & Tags
        </StyledSubMenuHeader>

        <Link href="/cast"><MenuItem onClick={handleClose}>Cast</MenuItem></Link>
        <Link href="/stories"><MenuItem onClick={handleClose}>Stories</MenuItem></Link>
        <Link href="/brands"><MenuItem onClick={handleClose}>Brands</MenuItem></Link>

        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
}
