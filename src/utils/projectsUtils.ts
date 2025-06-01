import { Project } from '../constants/projects';

export const getProjectsByCategory = (projects: Project[], category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (projects: Project[]): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByStatus = (projects: Project[], status: string): Project[] => {
  return projects.filter(project => project.status === status);
};

export const getProjectsByYear = (projects: Project[], year: number): Project[] => {
  return projects.filter(project => project.year === year);
};

export const getAllTechnologies = (projects: Project[]): string[] => {
  const allTechs = projects.flatMap(project => project.technologies);
  return [...new Set(allTechs)].sort();
};

export const getProjectsCount = (projects: Project[]) => {
  return {
    total: projects.length,
    completed: projects.filter(p => p.status === 'completed').length,
    inProgress: projects.filter(p => p.status === 'in-progress').length,
    planned: projects.filter(p => p.status === 'planned').length,
    featured: projects.filter(p => p.featured).length
  };
};

export const searchProjects = (projects: Project[], query: string): Project[] => {
  const lowercaseQuery = query.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.en.toLowerCase().includes(lowercaseQuery) ||
    project.description.pt.toLowerCase().includes(lowercaseQuery) ||
    project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery))
  );
};