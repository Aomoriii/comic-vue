import {createWebHistory,createRouter} from "vue-router";
import Home from "../views/Home";

const routes = [
    {
        path: "/Home",
        name: "Home",
        component: Home,
    },
    {
        path: "/detail",
        name: "Detail",
        // component: Detail,
        component: () =>
            import('../views/Detail')
    },
    {
        path: "/category",
        name: "Category",
        component: () =>
            import('../views/Category')
    },
    {
        path: "/comicId/charterId",
        name: "charterDetail",
        component: () =>
            import('../views/charterDetail')
    },
    {
        path: "/",
        name: "Signin",
        component: () =>
            import('../views/Signin')

    },
    {
        path: "/signup",
        name: "Signup",
        component: () =>
            import('../views/Signup')
    },



];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router