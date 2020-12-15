import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductsView from "../views/ProductsView.vue";
import Products from "../views/Products.vue";
import ProductDetail from "../views/ProductDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/test",
    name: "Test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
  },
  {
    path: "/products",
    name: "ProductsView",
    component: ProductsView,
    children: [
      {
        path: "",
        name: "Products",
        component: Products,
      },
      {
        path: ":id",
        name: "ProductDetail",
        component: ProductDetail,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
