import React from 'react';
import { Helmet } from 'react-helmet-async';
import { renderRoutes, RouteConfig } from 'react-router-config';

export default (props: { route: RouteConfig }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h1>Home</h1>
      {/* <p>{JSON.stringify(props, null, 2)}</p> */}
      {renderRoutes(props.route.routes)}
    </>
  );
};
