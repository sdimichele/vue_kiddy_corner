import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import TasksIndex from './views/TasksIndex.vue'
import ChildrenShow from './views/ChildrenShow.vue';
import TasksNew from './views/TasksNew.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    {path: '/signup', name: 'signup', component: Signup},
    {path: '/login', name: 'login', component: Login},
    {path: '/logout', name: 'logout', component: Logout},
    {path: '/tasks', name: 'tasks', component: TasksIndex},
    {path: '/children/:id', name: 'children-show', component: ChildrenShow},
    {path: '/tasks/new', name: 'tasks-new', component: TasksNew}

    
  ]
})
