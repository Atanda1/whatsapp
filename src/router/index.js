import Chatroom from "../views/chatroom.vue";
import Auth from "../layout/auth.vue";
import Login from "../views/login.vue";
import Signup from "../views/signup.vue";
import { auth } from "../firebase.js";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "auth",
    component: Auth,
    children: [
      {
        path: "",
        alias: "login",
        component: Login,
        name: "login",
        meta: {
          requiresGuest: true,
        },
      },
      {
        path: "signup",
        component: Signup,
        name: "signup",
        meta: {
          requiresGuest: true,
        },
      },
    ],
  },
  {
    path: "/chat",
    name: "chat",
    component: Chatroom,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const requiresGuest = to.matched.some((x) => x.meta.requiresGuest);

  if (requiresAuth && !auth.currentUser) {
    next({ name: "login" });
  } else if (requiresGuest && auth.currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
