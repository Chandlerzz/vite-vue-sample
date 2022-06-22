import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path";
import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
  allowJs:true,
  plugins: [alias(), vue()],
  server:{
    hmr:{
      overlay:false,
    }
  },
  resolve:{
    alias:{
      'vue': 'vue/dist/vue.esm-bundler.js',
     '@': join(__dirname, "src"),
    }
  },
  build:{
    rollupOptions: {
      external: ['vue'],
      preserveEntrySignatures: 'strict',
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";@import "./src/assets/css/variables.scss";@import "./src/assets/css/index.scss";`
        }
      }
    },
})
