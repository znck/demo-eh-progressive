import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import About from './About.vue'
const Talk = () => import('./Talk.vue')

export default new VueRouter({
  routes: [
    { path: '/', component: About },
    { path: '/talk', component: Talk }
  ]
})
