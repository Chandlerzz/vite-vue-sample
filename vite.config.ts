import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path";
import alias from "@rollup/plugin-alias";
import { resolve } from 'path' // 主要用于alias文件路径别名
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite';
import externalGlobals from 'rollup-plugin-external-globals';
import html from '@rollup/plugin-html';
import fs from 'fs';

const entryHtml = fs.readFileSync('./index.html', { encoding: 'utf-8' });
 
// https://vitejs.dev/config/
export default defineConfig({
  allowJs:true,
  plugins: [
    alias(),
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
    ElementPlus({
      useSource: true,
    }),
    {
       name: 'build html',
       apply: 'build',
       ...html({
       template: () => {
           return entryHtml
           .replace(
               '<!-- style placeholder -->',
               '<link rel="stylesheet" type="text/css" href="style.css" rel="external nofollow" />',
           )
           .replace(
               '<!-- script placeholder -->',
               `<script type="text/javascript" src="nf-tool.umd.js"></script>`,
           );
       },
       }),
    },
  ],
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
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'nf-tool',
      fileName: (format) => `nf-tool.${format}.js`
    },
    rollupOptions: {
     output:{
       inlineDynamicImports: true,
     },
      external: ['vue', 'vuex', 'vue-router', 'element-plus'],
      plugins: [
        externalGlobals({
          vue: 'Vue',
          vuex: 'Vuex',
          'vue-router': 'VueRouter',
          'element-plus': 'ElementPlus'
        })
      ]
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
