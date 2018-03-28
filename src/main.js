// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入状态管理
import store from './store/'
Vue.config.productionTip = false

// 引入公共的js  方法
import common from './assets/js/common'
Vue.prototype.$common = common
    // 全局默认样式
import '@/assets/css/base.css'
// vant ui组件 (按需引入方式)
import { Button } from 'vant';
Vue.use(Button);

import { Area } from 'vant';
Vue.use(Area);

import { Icon } from 'vant';

Vue.use(Icon);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})