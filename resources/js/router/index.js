import { createRouter, createWebHistory } from "vue-router";
import register from '../pages/cadets/register.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/register',
            name: 'cadet.register',
            component: register
        }
    ]
})

export default router