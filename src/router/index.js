import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/demo.vue'),
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes: routes
})
