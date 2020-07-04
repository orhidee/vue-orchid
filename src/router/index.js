import Vue from 'vue'
import Router from 'vue-router'
import Items from '@/components/Items'
import Item from '@/components/Item'
import Mosaic from '@/components/Mosaic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'Käpalised - Listing',
      component: Items
    },
    {
      path: '/',
      name: 'Käpalised - Mosaiik',
      component: Mosaic
    },
    {
      path: '/item/:name',
      name: 'Item',
      component: Item
    }
  ]
})
