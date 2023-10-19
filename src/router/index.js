import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/homePage",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/addTask",
    name: "AddTask",
    component: () => import("../views/AddTask.vue"),
  },
  {
    path: "/task/:id",
    name: "EditTask",
    component: () => import("../views/EditTask.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
