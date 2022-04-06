import Vue from "vue";
import VueRouter from "vue-router";
import RegisterUser from "../views/RegisterUser.vue";
import ViewUsers from "../views/ViewUsers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RegisterUser",
    component: RegisterUser,
  },
  {
    path: "/users",
    name: "ViewUsers",
    component: ViewUsers
  },
];

const router = new VueRouter({
  routes,
});

export default router;
