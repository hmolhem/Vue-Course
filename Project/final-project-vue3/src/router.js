import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './Pages/HomePage.vue';
import IndexUsers from './Pages/users/IndexUsers.vue';
const routes = [
    {path: "/", name:"Home", component:HomePage },
    {path: "/users", name:"IndexUsers", component:IndexUsers }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;