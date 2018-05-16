import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main1',
      component: resolve => require(['../components/HelloWorld.vue'], resolve)
    },
    {
      path: '/main',
      component: resolve => require(['../components/common/Home.vue'], resolve)
    }
  ]
})
