import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    //后端已经配置好跨域了
    // proxy: {
    //   '/api': {
    //     target: '', --请求的地址
    //     changeOrigin: true, --允许跨域
    //     ws: true, --允许websocket代理
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   }
    // }
  }


})
