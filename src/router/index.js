import {createWebHistory,createRouter} from "vue-router";
import Home from "../views/Home";

const routes = [
    {
        path: "/",
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
    }

];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router