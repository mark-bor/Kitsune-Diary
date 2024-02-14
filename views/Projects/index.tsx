import React, { useState } from 'react';
import Icon from '../../components/Icon/index';
import Page from '../../components/Page/index';
import { PROJECTS } from '../../lib/samples/PROJECTS';
import ProjectFilters from '../../components/ProjectFilters/index';
import Project from '../../components/Project/index';
import clsx from "clsx";
import styles from "./styles.module.scss";

const listStyles: {name: string, icon: 'grid-2x2' | 'rows-3'}[] = [
  {name: 'grid', icon: 'grid-2x2'},
  {name: 'list', icon: 'rows-3'},
]

export default function Projects() {
  const [filter, setFilter] = useState(false);
  const [listStyle, setListStyle] = useState('grid');
  const [projects, setProjects] = useState([...PROJECTS]);

  return (
    <Page title='Projects'>
      <section className={styles.projects}>
        <button className={styles.filterButtonOpen} onClick={() => setFilter(true)}>
          <Icon name='filter' width={30} height={30} />
        </button>

        <div>
          <ProjectFilters 
            projects={PROJECTS} 
            setProjects={setProjects}
            isFilter={filter} 
            setIsFilter={setFilter} 
          />
        </div>

        <div>
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