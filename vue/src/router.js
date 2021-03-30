/**
 * 路由
 * @author Chenxiangyu
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ './views/home.vue')
    }, {
        path: '/hack',
        component: () => import(/* webpackChunkName: "hack" */ './views/hack.vue')
    }, {
        path: '/me',
        component: () => import(/* webpackChunkName: "me" */ './views/me.vue')
    }, {
        path: '/statistics/1',
        component: () => import(/* webpackChunkName: "statistics-1" */ './views/statistics/1.vue')
    }, {
        path: '/statistics/2',
        component: () => import(/* webpackChunkName: "statistics-2" */ './views/statistics/2.vue')
    }, {
        path: '/statistics/3',
        component: () => import(/* webpackChunkName: "statistics-3" */ './views/statistics/3.vue')
    }, {
        path: '/statistics/4',
        component: () => import(/* webpackChunkName: "statistics-4" */ './views/statistics/4.vue')
    }, {
        path: '/statistics/5',
        component: () => import(/* webpackChunkName: "statistics-5" */ './views/statistics/5.vue')
    }]
})

export default router