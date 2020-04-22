import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import about from '../components/about.vue'
import login from '../components/logIn.vue'

Vue.use(Router)

const routes = [
    {
    path: '/Home',
    name: 'Home',
    component: Home
    },
    {
    path: '/about',
    name: 'about',
    component: about
    },
    {
        path: '/logIn',
        name: 'login',
        component: login
    }
]

export const router = new Router({
    mode: "hash",
    routes,
    scrollBehavior() {
        return { x:0, y:0 }
    }
})