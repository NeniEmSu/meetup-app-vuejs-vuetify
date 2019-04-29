import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Meetups from './views/Meetup/meetUps.vue';
import CreateMeetUps from './views/Meetup/createMeetUps.vue'
import Profile from './views/User/profile.vue'
import SignUp from './views/User/signUp.vue'
import SignIn from './views/User/signIn.vue'
import MeetUp from './views/Meetup/meetUp.vue'





Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/meetUps',
      name: 'Meetups',
      component: Meetups
    },

    {
      path: '/meetUp/new',
      name: 'CreateMeetUps',
      component: CreateMeetUps
    },
    {
      path: '/meetups/:id',
      name: "MeeuUp",
      component: MeetUp
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    }
  ],
  mode: 'history'

})