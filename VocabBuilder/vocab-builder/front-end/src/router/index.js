import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewWord from '../views/NewWords.vue'
import UserWords from '../views/UserVocab.vue'
import WordList from '../views/WordLists.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/NewWords',
    name: 'Add Word',
    component: NewWord
  },
  {
    path: '/Vocab',
    name: 'user words',
    component: UserWords
  },
  {
    path: '/Lists',
    name: 'lists',
    component: WordList
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
