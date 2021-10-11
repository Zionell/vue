import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: ()=>import("../pages/dashboard")
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: ()=>import("../pages/dashboard")
        },
        {
            path: '/dashboard/:page',
            name: 'Dashboard',
            component: ()=>import("../pages/dashboard"),
        },
        {
            path: '/calculator',
            name: 'calculator',
            component: ()=>import("../pages/calculator")
        },
        {
            path: '/add/payment/*',
            name: 'AddPayment',
            component: ()=>import("../pages/dashboard")
        },
        {
            path: '/edit/payment/*',
            name: 'EditPayment',
            component: ()=>import("../pages/dashboard")
        },
        {
            path: '*',
            name: 'NotFound',
            component: ()=>import("../pages/Page404")
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.name === 'dashboard') {
        next({path: '/dashboard/1'})
    } else {
        next()
    }
})

export default router;