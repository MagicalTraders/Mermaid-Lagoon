import React from 'react';

import { Container, Typography, Grid } from '@material-ui/core';
import Head from 'next/head';

import Layout from '@/components/shared/Layout';
import Link from '@/components/shared/Link';
import { getAllBrands } from '@/lib/cms/graphapi/brand';

const AlphabeticalList = (props) => {
  const { letter, terms } = props;

  return (
    <>
      <Typography variant="h5">
        "
        {letter.toUpperCase()}
        "
      </Typography>
      <Grid spacing={3} style={{ marginBottom: 50 }} container>
        {terms.map((term, i) => (
          <Grid
            key={i} sm={2} xs={6}
            item
          >
            <Link href={`/brand/${term.slug}`}>
              {term.name}
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const Brands = ({ allTerms, preview }) => (
  <>
    <Head>
      <title key="title">All Brands on Magical Traders</title>
    </Head>

    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h1">All Brands</Typography>

        {Object.keys(allTerms).map((key) => {
          const termGroup = allTerms[key];
          if (!termGroup.length) { return; }

          return (
            <AlphabeticalList key={key} letter={key} terms={termGroup} />
          );
        })}
      </Container>
    </Layout>
  </>
);

// <Link href={`/cast/${term.slug}`} key={term.i}>{term.name}</Link>
// <br />

export default Brands;

export const getStaticProps = async ({ preview = null }) => {
  const allTerms = (await getAllBrands(preview)) || [];
  // console.log(allTerms)
  return {
    props: {
      allTerms: {
        a: allTerms.filter(({ name }) => name.toLowerCase().startsWith('a')),
        b: allTerms.filter(({ name }) => name.toLowerCase().startsWith('b')),
        c: allTerms.filter(({ name }) => name.toLowerCase().startsWith('c')),
        d: allTerms.filter(({ name }) => name.toLowerCase().startsWith('d')),
        e: allTerms.filter(({ name }) => name.toLowerCase().startsWith('e')),
        f: allTerms.filter(({ name }) => name.toLowerCase().startsWith('f')),
        g: allTerms.filter(({ name }) => name.toLowerCase().startsWith('g')),
        h: allTerms.filter(({ name }) => name.toLowerCase().startsWith('h')),
        i: allTerms.filter(({ name }) => name.toLowerCase().startsWith('i')),
        j: allTerms.filter(({ name }) => name.toLowerCase().startsWith('j')),
        k: allTerms.filter(({ name }) => name.toLowerCase().startsWith('k')),
        l: allTerms.filter(({ name }) => name.toLowerCase().startsWith('l')),
        m: allTerms.filter(({ name }) => name.toLowerCase().startsWith('m')),
        n: allTerms.filter(({ name }) => name.toLowerCase().startsWith('n')),
        o: allTerms.filter(({ name }) => name.toLowerCase().startsWith('o')),
        p: allTerms.filter(({ name }) => name.toLowerCase().startsWith('p')),
        q: allTerms.filter(({ name }) => name.toLowerCase().startsWith('q')),
        r: allTerms.filter(({ name }) => name.toLowerCase().startsWith('r')),
        s: allTerms.filter(({ name }) => name.toLowerCase().startsWith('s')),
        t: allTerms.filter(({ name }) => name.toLowerCase().startsWith('t')),
        u: allTerms.filter(({ name }) => name.toLowerCase().startsWith('u')),
        v: allTerms.filter(({ name }) => name.toLowerCase().startsWith('v')),
        w: allTerms.filter(({ name }) => name.toLowerCase().startsWith('w')),
        x: allTerms.filter(({ name }) => name.toLowerCase().startsWith('x')),
        y: allTerms.filter(({ name }) => name.toLowerCase().startsWith('y')),
        z: allTerms.filter(({ name }) => name.toLowerCase().startsWith('z')),
      },
      preview,
    },
  };
};
