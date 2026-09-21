import {createRouter, createWebHistory} from "vue-router";
import About from "./shared/presentation/views/about.vue";
import Home from "./shared/presentation/views/home.vue";

const pageNotFound = () => import('./shared/presentation/views/page-not-found.vue')

const routes = [
    { path: '/home', name: 'home', component: Home, meta: { title: 'Home' } },
    { path: '/about', name: 'about', component: About, meta: { title: 'About' } },
    { path: '/', redirect: '/home'},
    { path: "/:pathMatch(.*)*", name: 'not-found', component: pageNotFound, meta: { title: 'Page Not Found' } },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

export default router;