import Vue from "vue";
import Router from "vue-router";
Vue.use(Router)
export default new Router({
    routes:[
        { 
            path: "/",
            component: () => import('../views/index.vue')
        },
        { 
            path: "/PageA",
            component: () => import('../views/PageA.vue')
        },
        { 
            path: "/PageB",
            component: () => import('../views/PageB.vue')
        }
    ]
})