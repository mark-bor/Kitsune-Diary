import React from 'react';
import Link from 'next/link';
import { projects, filtersOfProjects } from '../../lib/samples';
import ProjectFilters from '../../components/ProjectFilters/index';
import styles from "./styles.module.scss";


export default function Projects() {
  return (
    <section className={styles.projects}>
      <section className={styles.filters}>
        <h2 className={styles.title}>Filter by</h2>

        <ProjectFilters filters={filtersOfProjects} />
      </section>

      <ul className={styles.projectsList}>
        {projects.map((p) => (
          <li className={styles.project}>

          </li>
        ))}
      </ul>
    </section>
  )
}