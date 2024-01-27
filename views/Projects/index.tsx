import React, { useState } from 'react';
import Icon from '../../components/Icon/index';
import Page from '../../components/Page/index';
import { projects, filtersOfProjects } from '../../lib/samples';
import ProjectFilters from '../../components/ProjectFilters/index';
import Project from '../../components/Project/index';
import clsx from "clsx";
import styles from "./styles.module.scss";


export default function Projects() {
  const [filters, setFilters] = useState(false);
  const [listStyle, setListStyle] = useState('grid');

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

        <div>
          <div className={styles.projectsListStyles}>
            <button 
              className={clsx(
                styles.listStylesButton, 
                listStyle==='list' ? styles.listStylesButtonActive : null
              )}
              onClick={() => setListStyle('list')}
            >
              <Icon name='rows-3' width={20} height={20} />
            </button>
            <button
              className={clsx(
                styles.listStylesButton, 
                listStyle==='grid' ? styles.listStylesButtonActive : null
              )}
              onClick={() => setListStyle('grid')}
            >
              <Icon name='grid-2x2' width={20} height={20} />
            </button>
          </div>

          <ul 
            className={clsx(
              styles.projectsList, 
              listStyle==='list' ? styles.projectsListList : styles.projectsListGrid
            )}
          >
            {projects.map((p, i) => (
              <li key={i} className={styles.project}>
                <Project data={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Page>
  )
}