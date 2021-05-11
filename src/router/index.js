import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

/**路由映射关系*/
const routes = [
  {
    /*重定向*/
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/category',
    component: () => import('../views/category/Category')
  },
  {
    path: '/shoppingcar',
    component: () => import('../views/shoppingcar/ShoppingCar')
  },
  {
    path: '/profile',
    component: ()=> import('../views/profile/profile')
  }
]
const router = new VueRouter({
  routes,
})


export default router;
