import React, { useState, useMemo } from 'react';
import { hasCookie, getCookie, setCookie } from 'cookies-next';
import Icon from '../../components/Icon/index';
import Page from '../../components/Page/index';
import ProjectFilters from '../../components/ProjectFilters/index';
import Project from '../../components/Project/index';
import clsx from "clsx";
import {
  useGetAllProjectsQuery,
  GetProjectsData,
  ErrorData
} from '../../lib/api/projects/index';
import styles from "./styles.module.scss";


const listStyles: {name: string, icon: 'grid-2x2' | 'rows-3'}[] = [
  {name: 'grid', icon: 'grid-2x2'},
  {name: 'list', icon: 'rows-3'},
]


export default function Projects() {
  let localDB: GetProjectsData;

  if (hasCookie('projects_filter')) {
    const localData: any = getCookie('projects_filter');
    localDB = JSON.parse(localData);
  }
  else {
    localDB = {status: [], category: [], type: []}
  }

  const [filter, setFilter] = useState(false);
  const [filters, setFilters] = useState<GetProjectsData>(localDB);
  const [listStyle, setListStyle] = useState('grid');
  const {
    data, isLoading,
    error, isError
  } = useGetAllProjectsQuery(filters || localDB);
  
  useMemo(() => {
    setCookie( 'projects_filter', JSON.stringify(filters));
  }, [filters])

  const filterProjects = async (filterName: string, value: string) => {
    let newFilter: string[] = [...filters[filterName]];

    newFilter.includes(value) 
      ? newFilter = newFilter.filter(e => e!=value) 
      : newFilter.push(value);

    setFilters({
      ...filters,
      [filterName]: newFilter
    });
  }

  return (
    <Page title='Projects'>
      <section className={styles.projects}>
        <div>
          <ProjectFilters 
            projects={data || []} 
            isFilter={filter} 
            setIsFilter={setFilter} 
            filters={filters}
            setFilters={filterProjects}
          />
        </div>

        <div>
          <div className={styles.controllers}>
            <button className={styles.filterButtonOpen} onClick={() => setFilter(true)}>
              <Icon name='filter' width={30} height={30} />
            </button>

            <div className={styles.projectsListStyles}>
              {listStyles.map((ls, i) => (
                <button 
                  key={i}
                  className={clsx(
                    styles.listStylesButton, 
                    ls.name===listStyle ? styles.listStylesButtonActive : null
                  )}
                  onClick={() => setListStyle(ls.name)}
                >
                  <Icon name={ls.icon} width={20} height={20} />
                </button>
              ))}
            </div>
          </div>

          {(data && data.length>0) ? (
            <ul 
              className={clsx(
                styles.projectsList, 
                listStyle==='grid' ? styles.grid : styles.list
              )}
            >
              {data.map((p, i) => (
                <li key={i} className={styles.project}>
                  <Project data={p} />
                </li>
              ))}
            </ul>
          ) : (
            <h2 className={styles.message}>
              {isLoading ? 'Loading...' : null}
              {isError ? (
                `Code ${(error as ErrorData).status}. ${(error as ErrorData).data.message}`
              ) : null}
            </h2>
          )}
        </div>
      </section>
    </Page>
  )
}