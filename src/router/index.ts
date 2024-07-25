import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import Layout from '@/components/layout/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/sys/login.vue')
    },
    {
        path: "/sys",
        component: Layout,
        children: [
            {
                path: 'user',
                name:'sss',
                component: () => import('@/views/sys/user/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes  
})

export default router