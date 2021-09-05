import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/Login.vue'
import home from '../components/Home.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/Login' },
    { path: '/Login', component: login },
    { path: '/Home', component: home }
  ]
})

// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径， from代表从哪个路径跳转来，next是一个函数，表示放行
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
