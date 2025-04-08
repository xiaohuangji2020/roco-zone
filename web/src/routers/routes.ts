export const routes = [
  {
    path: '/helloworld',
    name: 'helloworld',
    component: async () => await import('@/views/HelloWorld.vue'),
  },
];
