import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
import Missing from '../views/404.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home,
        meta: {
            title: ''
        }
    },
    {
        path: '/Home',
        name: 'Home',
        meta: {
            title: 'Home'
        },
        component:Home
    },
    
    {
        path: '/Privacy',
        name: 'Privacy',
        meta: {
            title: 'Home1'
        },
        component: () =>
            import ('../views/Privacy.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0

        if (to.hash) {
            scrollTo = to.hash
        } else if (savedPosition) {
            scrollTo = savedPosition.y
        }

        return goTo(scrollTo)
    },
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})


export default router