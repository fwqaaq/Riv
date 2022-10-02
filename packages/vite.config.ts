/** @format */

import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
const FilePath = (url: string) => fileURLToPath(new URL(url, import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    __VUE_OPTIONS_API__: false,
  },
  plugins: [
    vue(),
    dts({
      exclude: ['env.d.ts', 'src/shims-vue.d.ts', 'src/types.ts'],
    }),
  ],
  resolve: {
    alias: {
      '@': FilePath('./playground'),
    },
  },
  build: {
    lib: {
      entry: FilePath('./src/index.ts'),
      name: 'Riv',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'es') return 'index.mjs'
        return 'index.cjs'
      },
    },
  },
})
