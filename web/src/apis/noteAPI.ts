import { $http } from '@/plugins/ajax';

export const getNoteContent = async (mkName: string) => {
  const { data } = await $http.get(`/md/${mkName}.md`);
  return data;
};
