export const routes = [
  {
    path: '/helloworld',
    name: 'helloworld',
    component: async () => await import('@/views/HelloWorld.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: async () => await import('@/views/home/HomeIndex.vue'),
  },
];
