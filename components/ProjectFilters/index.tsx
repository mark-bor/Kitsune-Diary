import React from 'react';
import { Disclosure } from '@headlessui/react'
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { ProjectFilters } from '../../lib/samples';
import Checkbox from '../../components/Checkbox/index';
import styles from "./styles.module.scss";


type ProjectFiltersProps = {
  filters: ProjectFilters[]
  isFilters: boolean
  setIsFilters: any
}


export default function ProjectFilters({filters, isFilters, setIsFilters}: ProjectFiltersProps) {
  return (
    <section className={clsx(styles.filters, isFilters ? styles.filtersActive : null)}>
      <button className={styles.filterButtonClose} onClick={() => setIsFilters(!filters)}>
        <Icon icon={'radix-icons:cross-2'} width={30} />
      </button>

      <h2 className={styles.title}>Filter by</h2>

      {filters.map((filter, i) => (
        <div key={i} className={styles.filter}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={styles.filterButton}>
                  <span className={styles.filterTitle}>{filter.label}</span>
                  <Icon 
                    icon={open ? 'formkit:up' : 'formkit:down'}
                    name='chevron button'
                    width={20}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className={styles.filterlist}>
                  <ul>
                    {filter.options.map((o, i) => (
                      <li key={i}>
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
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </section>
  )
}