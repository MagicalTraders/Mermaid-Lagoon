import Router from 'next/router';
import React, { Component } from 'react';

import Layout from '../../shared/Header';
import createLoginUrl from '../../../lib/url-helper';

export default class RedirectToLogin extends Component {
  componentDidMount() {
    window.location.assign(createLoginUrl(Router.pathname));
  }

  render() {
    return (
      <Layout>
        <p>Signing you in...</p>
      </Layout>
    );
  }
}
