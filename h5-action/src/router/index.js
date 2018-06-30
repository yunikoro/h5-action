import Vue from 'vue';
import Router from 'vue-router';
import WorldCupMss from '@/components/WorldCupMss';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WorldCupMss',
      component: WorldCupMss,
      props: route => ({ channelCode: route.query.channelCode }),
    },
  ],
});
