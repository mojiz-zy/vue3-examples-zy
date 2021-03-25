import component from "*.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/example01",
    component: () => import("@/views/example01/Example01.vue")
  },
  {
    path: "/example02",
    component: () => import("@/views/example02/Example02.vue")
  },
  {
    props: true,
    path: "/example03",
    component: () => import("@/views/example03/Example03.vue")
  },
  {
    props: true,
    path: "/example03-sid/studentid/:sid/homeworkid/:hid", //:sid  通过 :  来获取参数
    component: () => import("@/views/example03/Example03-sid.vue")
  },
  {
    props: true,
    path: "/example04",
    component: () => import("@/views/example04/Exmple04-01.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
