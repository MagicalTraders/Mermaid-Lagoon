/* eslint-disable jsx-a11y/anchor-has-content */
import React, { forwardRef } from 'react';

import MuiLink from '@material-ui/core/Link';
import clsx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const NextComposed = forwardRef((props, ref) => {
  const { as, href, ...other } = props;

  return (
    <NextLink as={as} href={href}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

NextComposed.propTypes = {
  as:   PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  // prefetch: PropTypes.bool,
};

NextComposed.defaultProps = {
  as: null,
  // prefetch: false,
};

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props) {
  const {
    activeClassName = 'active',
    className: classNameProps,
    href,
    innerRef,
    naked,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  if (naked) {
    return (
      <NextComposed
        className={className}
        href={href}
        ref={innerRef}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      className={className}
      component={NextComposed}
      href={href}
      ref={innerRef}
      {...other}
    />
  );
}

Link.propTypes = {
  activeClassName: PropTypes.string,
  as:              PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className:       PropTypes.string,
  href:            PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked:    PropTypes.bool,
  onClick:  PropTypes.func,
  // prefetch: PropTypes.bool,
};

Link.defaultProps = {
  activeClassName: null,
  as:              null,
  className:       null,
  innerRef:        null,
  naked:           false,
  onClick:         null,
  // prefetch:        false,
};

export default forwardRef((props, ref) => (
  <Link {...props} innerRef={ref} />
));
