import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/CDN/课程/2021-2022-1 正课/毛概/Poetic Mao/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/CDN/课程/2021-2022-1 正课/毛概/Poetic Mao/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
