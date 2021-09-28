import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/homedefault',
    name: 'HomeDefault',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/HomeDefault.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import(/* webpackChunkName: "about" */ '../views/me/Me.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "about" */ '../views/category/Category.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/cart/Cart.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// router.beforeEach((to,from,next) => { 
//   if (to.name === 'Auth' || to.name === 'Me') {
//       next()
//       return
//   }
//   const openId = localStorage.getItem('openId');
//   if (!openId) {
//       //保存当前路由地址，授权后还会跳到此地址
//       const fullPath = to.fullPath;
//       sessionStorage.setItem('wxRedirectUrl', fullPath)      
//       window.location.href ='http://localhost:19913/WixHelper/MockLogin?code=test&state=http://localhost:8080/auth'
//  } else {
//      next()
//  }

// })

export default router
