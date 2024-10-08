import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'Counter',
      fileName: 'counter'
    },
     // 其他配置
     rollupOptions: {
      external: ["moment"],
      output: {
        globals: {
          moment: "moment",
        },
      },
    },
  }
})
