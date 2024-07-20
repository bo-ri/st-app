import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  process.env = { ...process.env, ...env };
  return {
    plugins: [tsconfigPaths()],
    css: {
      modules: {
        scopeBehaviour: 'local',
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/index.scss";\n`,
        },
      },
    },
    resolve: {
      alias: {
        '@/': path.join(__dirname, './app/'),
      },
    },
  };
});
