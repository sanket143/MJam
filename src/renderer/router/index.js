import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/mainframes/home').default
    },
    {
      path: '/songs',
      name: 'songs',
      component: () => import(/* webpackChunkName: "songs" */ '@/components/mainframes/songs')
    },
    {
      path: '/artist/:artist_name',
      name: 'artist',
      component: () => import(/* webpackChunkName: "songs" */ '@/components/mainframes/artist')
    }
  ]
})
