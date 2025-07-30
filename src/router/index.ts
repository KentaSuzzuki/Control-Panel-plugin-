import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Settings from '../plugin/components/Dashboard.vue';
import Dragging from '../views/Dragging.vue';

// import Settings from '../views/Settings.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    },
    {
        path: '/dragging',
        name: 'Dragging',
        component: Dragging
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router 