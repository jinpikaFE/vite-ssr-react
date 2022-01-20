import viteSSR from 'vite-ssr';
import routes from '@config/routes';
import App from './App'

export default viteSSR(App, { routes }, ({ url, isClient, request }) => {
  // Custom initialization hook
});
