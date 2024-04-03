import React from 'react';
import { Disclosure } from '@headlessui/react'
import Icon from '../../components/Icon/index';
import clsx from 'clsx';
import Checkbox from '../../components/Checkbox/index';
import {
  PROJECTS_FILTERS,
  ProjectsFiltersData
} from '../../lib/samples/PROJECTS_FILTERS';
import { ProjectData, GetProjectsData } from '../../lib/api/projects/index';
import styles from "./styles.module.scss";


type ProjectFiltersProps = {
  projects: ProjectData[]
  isFilter: boolean
  setIsFilter: any
  filters: GetProjectsData
  setFilters: any
}


export default function ProjectFilters({
  projects, 
  isFilter, 
  setIsFilter,
  filters,
  setFilters
}: ProjectFiltersProps) {

  const checkFilters = (filterName: string, value: string) => {
    if (filters) {
      if (filterName==='status') return filters.status.includes(value) || false
      if (filterName==='category') return filters.category.includes(value) || false
      if (filterName==='type') return filters.type.includes(value) || false
    }
  }

  const numberOfProjects = (filter: ProjectsFiltersData, value: string) => {
    return filter.useFilterBy(projects, value).length
  }

  return (
    <section className={clsx(styles.filters, isFilter ? styles.filtersActive : null)}>
      <button className={styles.filterButtonClose} onClick={() => setIsFilter(false)}>
        <Icon name='x' width={30} height={30} />
      </button>

      <h2 className={styles.title}>Filter by</h2>

      {PROJECTS_FILTERS?.map((filter, i) => (
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
                          onChange={() => setFilters(filter.key, o.key)} 
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