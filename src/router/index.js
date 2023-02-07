import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MusicView from '../views/MusicView.vue'
import ContactView from '../views/ContactView.vue'
import LessonsView from '../views/LessonsView.vue'
import StoryView from '../views/StoryView.vue'


const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: true
    },
    {
      path: '/story',
      name: 'story',
      component: StoryView,
      props: true
    },
    {
      path: '/music',
      name: 'music',
      component: MusicView,
      props: true
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      props: true
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: LessonsView,
      props: true
    }
  ]
})

export default router
