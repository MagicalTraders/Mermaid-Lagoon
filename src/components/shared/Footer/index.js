import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
      <Container fixed>
        <Typography component="div" />
      </Container>
    </footer>
  );
};
export default Footer;
