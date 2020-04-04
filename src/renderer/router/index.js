import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/mainframes/home').default
    },
    {
      path: '/songs',
      name: 'songs',
      component: require('@/components/mainframes/songs').default
    },
    {
      path: '/artist/:artist_name',
      name: 'artist',
      component: require('@/components/mainframes/artist').default
    }
  ]
})
