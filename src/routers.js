import TodoApp from './components/TodoApp.vue'
import About from './components/About.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
  {
    name:'TodoApp',
    component:TodoApp,
    path:'/'
  },
  {
    name:'About',
    component:About,
    path:'/About'
  }

];

const router =createRouter({
  history:createWebHistory(),
  routes
})

export default router;
