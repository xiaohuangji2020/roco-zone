export default [{
  name: 'demo',
  path: '/demo',
  component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/DemoContainer.vue'),
  children: [
    {
      name: 'picWall',
      path: '/demo/picwall',
      component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/content/PicWall.vue'),
    },
    {
      name: 'trailingEffect',
      path: '/demo/trailingeffect',
      component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/content/TrailingEffect.vue'),
    },
    {
      name: 'scratchCard',
      path: '/demo/scratchcard',
      component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/content/ScratchCard.vue'),
    },
  ],
}];
