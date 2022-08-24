import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import HelloWorld from "@/components/HelloWorld";
import main from "@/components/main";
import baoXiuDan from "@/components/BaoXiuDan";
import jieDanRen from "@/components/JieDanRen";
import shenHeYuan1 from "@/components/ShenHeYuan1";
import shenHeYuan2 from "@/components/ShenHeYuan2";

const routes=[
    {
        path:'/',
        name:"Login",
        component:HelloWorld,
    },
    {
        path: '/main',
        name:'main',
        component: main,
    },
    {
        path: '/baoXiu',
        name: 'baoxiu',
        component: baoXiuDan,
    },
    {
        path: '/jieDan',
        name: 'jieDan',
        component: jieDanRen,
    },
    {
        path: '/shenHe1',
        name: 'shenHe1',
        component: shenHeYuan1,
    },
    {
        path: '/shenHe2',
        name: 'shenHe2',
        component: shenHeYuan2,
    },


]

const router = createRouter({
        history: createWebHistory(),
        routes
    }
)
export {router}