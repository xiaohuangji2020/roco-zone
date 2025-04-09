export default [{
  name: 'demo',
  path: '/demo',
  component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/DemoIndex.vue'),
  children: [
    {
      name: 'PicWall',
      path: '/demo/Picwall',
      component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/PicWall.vue'),
    },
    {
      name: 'TrailingEffect',
      path: '/demo/Trailingeffect',
      component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/TrailingEffect.vue'),
    },
    {
      name: 'ScratchCard',
      path: '/demo/Scratchcard',
      component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/ScratchCard.vue'),
    },
  ],
}];
