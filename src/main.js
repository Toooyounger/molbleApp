import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
    easing: 'ease',
    speed: 430,
    showSpinner: false,
    trickleSpeed: 150,
    minimum: 0.3
})

//路由监听
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

//路由跳转结束
router.afterEach(() => {
    NProgress.done()
});
createApp(App).use(ElementPlus).use(router).mount('#app')
