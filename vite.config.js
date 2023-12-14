import { defineConfig } from 'vite'
import { createVuePlugin } from "vite-plugin-vue2";
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    vueJsx(),
    {
      name: 'load-vue-files-as-jsx',
      async transform(code, id) {
        if (!id.endsWith('.vue')) return null
        return code
      },
      enforce: 'pre',
    },
  ],
  define: {
    'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: [".vue", ".js", ".json"],
  },
})
