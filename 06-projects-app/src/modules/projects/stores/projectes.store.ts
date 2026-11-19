import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Project } from '../interfaces/project.interface';

const initialLoad = (): Project[] => {
  return [
    {
      id: '1',
      name: 'Proyecto X',
      tasks: [],
    },
    {
      id: '2',
      name: 'Proyecto Z',
      tasks: [],
    },
  ];
};

export const useProjecsStore = defineStore('projects', () => {
  const projects = ref<Project[]>(initialLoad());

  return { projects };
});
