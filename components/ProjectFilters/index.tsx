import React, { useState, useEffect, useMemo } from 'react';
import { hasCookie, getCookie, setCookie } from 'cookies-next';
import { Disclosure } from '@headlessui/react'
import Icon from '../../components/Icon/index';
import clsx from 'clsx';
import Checkbox from '../../components/Checkbox/index';
import { 
  projectsFilters, ProjectsFiltersData, 
  ProjectData 
} from '../../lib/samples/projects/projects';
import {
  filter,
  useFilterByStatus,
  useFilterByKind,
  useFilterByCategory,
} from '../../lib/samples/projects/index';
import styles from "./styles.module.scss";


type ProjectFiltersProps = {
  projects: ProjectData[]
  setProjects: any
  isFilter: boolean
  setIsFilter: any
}

type LocalDBData = {
  status: string[], 
  kind: string[], 
  category: string[]
}


export default function ProjectFilters({
  projects, 
  setProjects,
  isFilter, 
  setIsFilter
}: ProjectFiltersProps) {

  let localDB: LocalDBData;

  if (hasCookie('projects_filter')) {
    const localData: any = getCookie('projects_filter');
    localDB = JSON.parse(localData);
  }
  else {
    localDB = {status: [], kind: [], category: []}
  }

  const [status, setStatus] = useState<string[]>([...localDB.status])
  const [kind, setKind] = useState<string[]>([...localDB.kind])
  const [category, setCategory] = useState<string[]>([...localDB.category])
  const [ldb, setLDB] = useState<boolean>(false)

  const checkFilters = (filterName: string, value: string) => {
    if (localDB) {
      if (filterName==='status') return localDB.status.includes(value) || false
      if (filterName==='kind') return localDB.kind.includes(value) || false
      if (filterName==='category') return localDB.category.includes(value) || false
    }
  }

  const numberOfProjects = (filter: ProjectsFiltersData, value: string) => {
    return filter.useFilterBy(projects, value).length
  }

  const filterProjects = (filterName?: string, value?: string) => {
    filter(
      status, useFilterByStatus, projects,
      (filterName==='status' && value) ? {setFilter: setStatus, value} : undefined
    ).then((arrByStatus) =>
      filter(
        kind, useFilterByKind, arrByStatus, 
        (filterName==='kind' && value) ? {setFilter: setKind, value} : undefined
      ).then((arrByKind) =>
        filter(
          category, useFilterByCategory, arrByKind, 
          (filterName==='category' && value) ? {setFilter: setCategory, value} : undefined
        ).then(async (arrByCategory) => {

          await setProjects(arrByCategory);
          setLDB(!ldb);

        })
      )
    )
  }

  useEffect(() => {
    if (projects?.length > 0) filterProjects();
  }, []);

  useMemo(() => {
    setCookie(
      'projects_filter', 
      JSON.stringify({ status, kind, category })
    )
  }, [ldb])

  return (
    <section className={clsx(styles.filters, isFilter ? styles.filtersActive : null)}>
      <button className={styles.filterButtonClose} onClick={() => setIsFilter(false)}>
        <Icon name='x' width={30} height={30} />
      </button>

      <h2 className={styles.title}>Filter by</h2>

      {projectsFilters?.map((filter, i) => (
        <div key={i} className={styles.filter}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={styles.filterButton}>
                  <span className={styles.filterTitle}>{filter.label}</span>
                  <Icon 
                    name={open ? 'chevron-up' : 'chevron-down'}
                    width={25}
                    height={25}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className={styles.filterlist}>
                  <ul>
                    {filter.options.map((o, i) => (
                      <li key={i}>
                        <Checkbox
                          className={styles.checkbox}
                          name={filter.label}
                          label={o.label}
                          number={numberOfProjects(filter, o.key)}
                          value={o.key}
                          defaultChecked={checkFilters(filter.key, o.key)}
                          onChange={() => filterProjects(filter.key, o.key)} 
                        />
                      </li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </section>
  )
}