import { lazy } from 'react';
import type { RouteConfig } from 'react-router-config';

const routes: RouteConfig[] = [
  {
    path: '/home',
    component: lazy(() => import('@/pages/Home')) as any,
    routes: [
      {
        path: '/home/test',
        component: lazy(() => import('@/pages/Test')),
      },
      // {
      //   path: '*',
      //   component: lazy(() => import('@/components/NotFound')),
      // },
    ],
  },
  {
    path: '/about',
    component: lazy(() => import('@/pages/About')),
  },
];

export default routes;
