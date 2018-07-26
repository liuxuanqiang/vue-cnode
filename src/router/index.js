import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Topics from '@/pages/topics'
import Topic from '@/pages/topic'
import User from '@/pages/user'
import About from '@/pages/about'
import Login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/topics',
    name: 'topics',
    component: Topics
  }, {
    path: '/topic/:id',
    name: 'topic',
    component: Topic
  }, {
    path: '/user/:id',
    name: 'user',
    component: User
  }, {
    path: '/about',
    name: 'about',
    component: About
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }]
})
