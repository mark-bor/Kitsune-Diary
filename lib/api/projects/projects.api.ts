import { api } from '../../redux/api'
import { ProjectData, GetProjectsData } from './projects.types'

const projectsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Sending cookieToken for creating new cache when cookie changes
    getAllProjects: builder.query<ProjectData[], GetProjectsData | undefined>({
      query: (filters) => {
        if (!filters) return `/projects`;

        const {status, category, type} = filters;
        const statuses: string = (status && status.length>0) ? `status=${status.join(',')}` : '';
        const categories: string = (category && category.length>0) ? `category=${category.join(',')}` : '';
        const types: string = (type && type.length>0) ? `type=${type.join(',')}` : '';
        const queries = [statuses, categories, types].filter(e => e).join('&');

        return `/projects${queries ? `?${queries}` : ''}`;
      },
    }),
    getProject: builder.query<ProjectData, string>({
      query: (projectId) => `/projects/${projectId}`,
    }),
  }),
});

export const { 
  useGetAllProjectsQuery, 
  useGetProjectQuery, 
} = projectsApi;
