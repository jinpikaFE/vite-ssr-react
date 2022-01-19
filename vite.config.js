import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSSR from 'vite-ssr/plugin';
import api from './node-server/api';
import path from 'path';

module.exports = defineConfig({
  server: {
    fs: {
      // The API logic is in outside of the project
      strict: false,
    },
  },
  plugins: [
    viteSSR({
      features: {
        // Manually disable features that are
        // detected because this is a mono repo
        reactStyledComponents: false,
        reactApolloRenderer: false,
      },
      build: {
        keepIndexHtml: true,
      },
    }),
    react(),
    {
      // Mock API during development
      configureServer({ middlewares }) {
        api.forEach(({ route, handler }) => middlewares.use(route, handler));
      },
    },
  ],
  resolve: {
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
      '.sass',
      '.scss',
    ], // 忽略输入的扩展名
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      { find: '@config', replacement: path.resolve(__dirname, 'config') },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
