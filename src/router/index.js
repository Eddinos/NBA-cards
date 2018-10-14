import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import PLayerList from '@/components/pages/PLayerList'
import Profile from '@/components/pages/Profile'
import TeamList from '@/components/pages/TeamList.vue'
import TeamProfile from '@/components/pages/TeamProfile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/players',
      name: 'PLayerList',
      component: PLayerList,
      meta: {title: 'players'}
    },
    {
      path: '/profile/:fullName',
      name: 'Profile',
      component: Profile,
      props: true,
      meta: {title: 'players'}
    },
    {
      path: '/teams',
      name: 'TeamList',
      component: TeamList,
      meta: {title: 'teams'}
    },
    {
      path: '/teamProfile/:tricode',
      name: 'TeamProfile',
      component: TeamProfile,
      props: true,
      meta: {title: 'teams'}
    }
  ],
  mode: 'history'
})
