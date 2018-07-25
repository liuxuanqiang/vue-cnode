import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Topics from '@/pages/topics'
import Topic from '@/pages/topic'
import User from '@/pages/user'

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
  }]
})
