import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MusicView from '../views/MusicView.vue'
import ContactView from '../views/ContactView.vue'
import LessonsView from '../views/LessonsView.vue'
import StoryView from '../views/StoryView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/story',
      name: 'story',
      component: StoryView
    },
    {
      path: '/music',
      name: 'music',
      component: MusicView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: LessonsView
    }
  ]
})

export default router
