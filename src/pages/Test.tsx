import React from 'react';
import { Helmet } from 'react-helmet-async';

export default () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h1>Test</h1>
      {/* <p>{JSON.stringify(props, null, 2)}</p> */}
    </>
  );
};
