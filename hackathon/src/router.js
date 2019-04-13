import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/score',
            name: 'score',
            component: () => import('./views/Score.vue'),
        },
        {
            path: '/vote',
            name: 'vote',
            component: () => import('./views/Vote.vue'),
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import('./views/Settings.vue'),
        },
    ]
})
