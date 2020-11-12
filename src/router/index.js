import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Loja from '../views/Loja.vue'

import ListaProdutos from '../components/ListaProdutos.vue'
import DetalheProduto from '../components/DetalheProduto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loja',
    name: 'loja',
    component: Loja,
    children: [
      { path: '', name: 'lista-de-produtos', component: ListaProdutos },
      { path: ':id', name: 'detalhes-do-produto', component: DetalheProduto }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
