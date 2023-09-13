import { createRouter, createWebHistory } from "vue-router";

import Dashboard from '../views/Dashboard'
import Login from '../views/Login'
import NotFound from '../views/404'

const routes = [
    {
        path:'/',
        name:'dashboard',
        component:Dashboard,
    },
    {
        path:'/login',
        name:'login',
        component:Login,
    },
    {
        path:'/:pathMatch(.*)*',
        name:'notfound',
        component:NotFound,
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router