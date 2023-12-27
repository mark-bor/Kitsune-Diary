import React from 'react';
import { Disclosure } from '@headlessui/react'
import { Icon } from '@iconify/react';
import { ProjectFilters } from '../../lib/samples';
import Checkbox from '../../components/Checkbox/index';
import styles from "./styles.module.scss";


type ProjectFiltersProps = {
  filters: ProjectFilters[]
}

const Chevron = ({open}: {open: boolean}) => {
  return (
    <Icon 
      icon={open ? 'formkit:up' : 'formkit:down'}
      name='chevron button'
      width={20}
    />
  )
}

export default function ProjectFilters({filters}: ProjectFiltersProps) {
  return (
    <>
      {filters.map((filter) => (
        <div className={styles.filter}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={styles.filterButton}>
                  <span className={styles.filterTitle}>{filter.label}</span>
                  <Chevron open={open} />
                </Disclosure.Button>

                <Disclosure.Panel className={styles.filterlist}>
                  <ul>
                    {filter.options.map((o) => (
                      <li>
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
    </>
  )
}