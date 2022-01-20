import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from '@config/routes';

export default function App() {
  return <>{renderRoutes(routes)}</>;
}
