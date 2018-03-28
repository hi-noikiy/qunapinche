import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import infoDetatil from '@/components/pages/infoDetatil'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        component: index
    }, , {
        path: '/infoDetatil',
        component: infoDetatil
    }, ]
})