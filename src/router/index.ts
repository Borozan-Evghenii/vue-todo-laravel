import { createRouter, createWebHistory } from 'vue-router'
import TasksView from '@/views/TasksView.vue'
import TasksHomepage from '@/views/TasksHomepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/category'
    },
    {
      path: '/category',
      name: 'TasksHomepage',
      component: TasksHomepage,
      props: true
    },
    {
      path: '/category/:categoryId',
      name: 'TasksView',
      component: TasksView,
      props: true
    }
  ]
})

export default router
