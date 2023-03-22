import { defineConfig } from "vite";
import * as path from 'path';
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/system-api": {
  //       target: "https://fengweiyun.iyuetiao.com/fc-api/",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  resolve:{
    alias:{
      '@':`${path.resolve(__dirname,'src')}/`,
    },
    extensions:['.mjs','.js','jsx','json','.vue'],
  },
  plugins: [
    uni(),
    AutoImport({
      include:[
        /\.[tj]sx?$/,   //.ts,.tsx,.js,.jsx
        /\.vue$/,       
        /\.vue\?vue/,  //.vue
      ],
      imports:[
        'vue',
        'uni-app'
      ],
      dts:'typings/auto-imports.d.ts',

    })
  ],
});
