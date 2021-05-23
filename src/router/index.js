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
    component: () => import('../views/home/Home'),
    meta: {
      isFootShow: true,
    }
  },
  {
    path: '/category',
    component: () => import('../views/category/Category'),
    meta: {
      isFootShow: true,
    }
  },
  {
    path: '/shoppingcar',
    component: () => import('../views/shoppingcar/ShoppingCar'),
    meta: {
      isFootShow: true,
    }
  },
  {
    path: '/profile',
    component: ()=> import('@/views/profile/Profile'),
    meta: {
      isFootShow: true,
    }
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/detail/Detail')
  }
]
const router = new VueRouter({
  routes,
  mode: "history"
})


export default router;
