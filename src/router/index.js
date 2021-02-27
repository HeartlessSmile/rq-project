import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";
import Layout from "../views/layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          hideInMenu: true,
          title: "首页",
          icon: "md-home",
        },
        component: Home,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/views/login/index.vue')
  },
  {
    path: "/register",
    name: "register",
    component: () => import('@/views/register/index.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
