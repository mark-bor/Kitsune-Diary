import { ProjectData } from './projects';

type OptionalData = {
  setFilter: any
  value: string
}

async function changeFilter(filters: string[], optional: OptionalData) {
  const { setFilter, value } = optional;
  let filter: string[] = [...filters];
  
  await filter.includes(value) 
  ? filter = filter.filter(e => e!=value) 
  : filter.push(value);
  await setFilter([...filter]);
  
  return filter;
}

export async function filter(
  filters: string[], filterBy: any, projects: ProjectData[], 
  optional?: OptionalData
) {
  let filter: string[] = [...filters];
  
  if (optional) {
    await changeFilter(filters, optional).then(res => filter=res);
  }

  if (filter?.length===0) return projects;

  let arr: ProjectData[] = [];
  for (var elem of filter) {
    arr = arr.concat(filterBy(projects, elem));
  }
  
  return arr;
}