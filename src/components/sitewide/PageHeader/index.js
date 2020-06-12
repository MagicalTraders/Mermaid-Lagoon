import React from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Search,
  Settings,
  User,
  HelpCircle,
  Lock,
  LogOut,
} from 'react-feather';

import { Nav, Form, Navbar, FormControl, Button } from 'react-bootstrap';

import { useUser } from '../../../lib/user';
import styles from './pageHeader.module.scss';

const PageHeader = () => {
  const { user, loading } = useUser();

  return (
    <header className={styles.pageHeaderWrapper}>
      <Navbar variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className={styles.link} href="#kids">
            Kids
          </Nav.Link>
          <Nav.Link className={styles.link} href="#features">
            Adults
          </Nav.Link>
          <Nav.Link className={styles.link} href="#pricing">
            Home
          </Nav.Link>
          <Nav.Link className={styles.link} href="#pricing">
            Lifestyle
          </Nav.Link>
          <Nav.Link className={styles.link} href="#pricing">
            Toys & Games
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Search />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>

      {/*
      <Nav>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Kids</NavLink>
        <NavLink href="#">Adults</NavLink>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Lifestyle</NavLink>
        <NavLink href="#">Toys & Games</NavLink>


      </Nav> */}
    </header>
  );
};

export default PageHeader;

{
  /* <nav>
  <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>About</a>
      </Link>
    </li>
    <li>
      <Link href="/protected-page">
        <a>Protected Page</a>
      </Link>
    </li>
    {!loading &&
      (user ? (
        <>
          <li>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>{' '}
          <li>
            <a href="/profile-ssr">Profile (SSR)</a>
          </li>{' '}
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        </>
      ) : (
          <>
            <li>
              <a href="/api/login">Login</a>
            </li>
          </>
        ))}
  </ul>
</nav> */
}
