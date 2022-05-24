import { defineConfig } from 'tsup'

export default defineConfig({
  dts: true,
  clean: true,
  minify: true,
  entry: ['src/index.ts'],
  format: ['esm', 'cjs']
})
