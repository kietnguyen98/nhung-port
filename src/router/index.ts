import { createRouter, createWebHistory } from 'vue-router';
import { HomePage } from '@/views';

const routes = [
    {
        path: '/',
        component: HomePage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
