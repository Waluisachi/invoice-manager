import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CreateInvoice from "../views/CreateInvoice.vue";
import EditInvoice from "../views/EditInvoice.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/create-invoice",
    name: "CreateInvoice",
    component: CreateInvoice,
  },
  {
    path: "/edit/:id",
    name: "EditInvoice",
    component: EditInvoice,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
