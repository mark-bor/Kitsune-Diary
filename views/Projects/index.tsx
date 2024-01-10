import React, { useState } from 'react';
import Icon from '../../components/Icon/index';
import Page from '../../components/Page/index';
import { projects, filtersOfProjects } from '../../lib/samples';
import ProjectFilters from '../../components/ProjectFilters/index';
import styles from "./styles.module.scss";


export default function Projects() {
  const [filters, setFilters] = useState(false);

  return (
    <Page title='The Kitsune Diary | Projects'>
      <section className={styles.projects}>
        <button className={styles.filterButtonOpen} onClick={() => setFilters(!filters)}>
          <Icon name='filter' width={30} height={30} />
        </button>

        <div>
          <ProjectFilters 
            filters={filtersOfProjects} 
            isFilters={filters} 
            setIsFilters={setFilters} 
          />
        </div>

        <ul className={styles.projectsList}>
          {projects.map((p, i) => (
            <li key={i} className={styles.project}></li>
          ))}
        </ul>
      </section>
    </Page>
  )
}