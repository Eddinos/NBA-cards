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
      component: PLayerList
    },
    {
      path: '/profile/:fullName',
      name: 'Profile',
      component: Profile,
      props: true
    },
    {
      path: '/teams',
      name: 'TeamList',
      component: TeamList
    },
    {
      path: '/teamProfile/:tricode',
      name: 'TeamProfile',
      component: TeamProfile,
      props: true
    }
  ],
  mode: 'history'
})
