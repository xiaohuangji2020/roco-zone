import note from './sub/note';
import demo from './sub/demo';

export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: async () => await import('@/views/home/HomeIndex.vue'),
  },
  ...note,
  ...demo,
];
