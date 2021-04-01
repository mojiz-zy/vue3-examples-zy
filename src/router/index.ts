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
    path: "/example04-01",
    component: () => import("@/views/example04/Example04-01.vue")
  },
  {
    props: true,
    path: "/example04-02",
    component: () => import("@/views/example04/Example04-02.vue")
  },
  {
    props: true,
    path: "/example06-01",
    component: () => import("@/views/example06/Example06-01.vue")
  },
  {
    props: true,
    path: "/example06-02",
    component: () => import("@/views/example06/Example06-02.vue")
  },
  {
    props: true,
    path: "/example07-01",
    component: () => import("@/views/example07/Example07-01.vue")
  },
  {
    props: true,
    path: "/example07-02",
    component: () => import("@/views/example07/Example07-02.vue")
  },
  {
    props: true,
    path: "/example07-03",
    component: () => import("@/views/example07/Example07-03.vue")
  },
  {
    props: true,
    path: "/example07-04",
    component: () => import("@/views/example07/Example07-04.vue")
  },
  {
    props: true,
    path: "/example08-01",
    component: () => import("@/views/example08/Example08-01.vue")
  },
  {
    props: true,
    path: "/example08-03",
    component: () => import("@/views/example08/Example08-03.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
