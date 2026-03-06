import ContactView from "@/views/ContactView.vue";
import HomeView from "@/views/HomeView.vue";
import MenuView from "@/views/MenuView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/menu",
      name: "Menu",
      component: MenuView,
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactView,
    },
  ],
});

export default router;
