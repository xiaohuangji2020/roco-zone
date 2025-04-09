export default [
  {
    name: 'note',
    path: '/note/list',
    component: () => import(/* webpackChunkName: 'note' */ '@/views/note/NoteList.vue'),
  },
  {
    name: 'noteContent',
    path: '/note/content',
    component: () => import(/* webpackChunkName: 'note' */ '@/views/note/NoteContent.vue'),
  },
];
