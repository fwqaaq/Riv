/** @format */

import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const FilePath = (url: string) => fileURLToPath(new URL(url, import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    //关闭选项api
    __VUE_OPTIONS_API__: false,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': FilePath('./playground'),
    },
  },
  build: {
    lib: {
      entry: FilePath('./src/index.ts'),
      name: 'Riv',
    },
    rollupOptions: {
      external: ['vue'],
      input: [FilePath('./src/index.ts')],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].cjs',
        },
      ],
    },
  },
})
