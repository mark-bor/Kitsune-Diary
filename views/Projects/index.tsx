import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
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
          <Icon icon={'ion:filter'} width={30} />
        </button>

        <section className={clsx(styles.filters, filters ? styles.filtersActive : null)}>
          <button className={styles.filterButtonClose} onClick={() => setFilters(!filters)}>
            <Icon icon={'radix-icons:cross-2'} width={30} />
          </button>

          <h2 className={styles.title}>Filter by</h2>

          <ProjectFilters filters={filtersOfProjects} />
        </section>

        <ul className={styles.projectsList}>
          {projects.map((p) => (
            <li className={styles.project}></li>
          ))}
        </ul>
      </section>
    </Page>
  )
}