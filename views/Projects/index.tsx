import React from 'react';
import Link from 'next/link';
import { projects, filtersOfProjects } from '../../lib/samples';
import Checkbox from '../../components/Checkbox/index';
import styles from "./styles.module.scss";


export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.filtersWrap}>
        <section className={styles.filters}>
          <h2 className={styles.title}>Filter by</h2>

          {filtersOfProjects.map((filter) => (
            <section className={styles.filterSection}>
              <h3 className={styles.filterTitle}>{filter.label}</h3>

              <ul className={styles.filterlist}>
                {filter.options.map((o) => (
                  <li className={styles.checkboxWrap}>
                    <Checkbox
                      className={styles.checkbox}
                      key={o.key}
                      name={filter.key}
                      value={o.key}
                      label={o.label}
                      number={0}
                      // defaultChecked={checkFilters(filter.key, o.key)}
                      // onChange={() => filterJobs(filter.key, o.key)} 
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}

        </section>
      </div>

      <ul className={styles.projectsList}>
        {projects.map((p) => (
          <li className={styles.project}>

          </li>
        ))}
      </ul>
    </section>
  )
}