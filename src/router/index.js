import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(VueRouter);

//const parseProps = r => ({ id: parseInt(r.params.id) });

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/home",
    redirect: "/"
  },
  {
    path: "/places",
    name: "places",
    // route level code-splitting
    // this generates a separate chunk (places.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "places" */ "../views/Places.vue")
  },
  {
    path: "/places/:id",
    name: "places-details",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (places.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "places" */ "../views/Places-details.vue")
  },
  {
    path: "*",
    name: "pageNotFound",
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
