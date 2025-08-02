import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import Home from './views/Home.vue'
import Blog from './views/Blog.vue'
import BlogPost from './views/BlogPost.vue'
import './style.css'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog/:slug', name: 'BlogPost', component: BlogPost, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

const head = createHead()

const app = createApp(App)
app.use(router)
app.use(head)
app.mount('#app')