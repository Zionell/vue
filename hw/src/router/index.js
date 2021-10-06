import Vue from "vue";
import Router from "vue-router";
import dashboard from "../pages/dashboard";
import calculator from "../pages/calculator";
import Page404 from "../pages/Page404";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard
        },
        {
            path: '/dashboard/:page',
            name: 'Dashboard',
            component: dashboard
        },
        {
            path: '/calculator',
            name: 'calculator',
            component: calculator
        },
        {
            path: '/add/payment/*?value=*',
            name: 'AddPayment',
            component: dashboard
        },
        {
            path: '/404',
            name: 'NotFound',
            component: Page404
        },
        {
            path: '*',
            redirect: '/404'
        }

    ]
})

router.beforeEach((to, from, next) =>{
    if (to.name === 'dashboard') {
        next({ path: '/dashboard/1' })
    } else {
        next()
    }
})

// router.afterEach((to)=>{
    // if (to.name === 'AddPayment') {
    //
    // }
// })

export default router;