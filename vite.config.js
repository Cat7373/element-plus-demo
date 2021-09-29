import vue from '@vitejs/plugin-vue'
import visualizer from 'rollup-plugin-visualizer'
import path from 'path'

// (4)
import ElementPlus from 'unplugin-element-plus/vite'

// (5)
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://cn.vitejs.dev/config/
export default {
  plugins: [
    vue(),

    // (4)
    ElementPlus({ useSource: true }),

    // (5)
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),

    {
      ...visualizer({
        filename: 'dist/report.html',
        gzipSize: true,
      }),
      apply: 'build',
    },
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  build: {
    brotliSize: false
  },
}
