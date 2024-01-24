import { createRouter, createWebHistory } from "vue-router";
import register from '../pages/cadets/register.vue'
import notFound from '../pages/notFound/index.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/register',
      name: 'cadet.register',
      component: register
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: notFound
    }
  ]
})

export default router