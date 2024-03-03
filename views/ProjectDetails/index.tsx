import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Icon from '../../components/Icon/index';
import Link from 'next/link';
import Page from '../../components/Page/index';
import { PROJECTS, ProjectData } from '../../lib/samples/PROJECTS';
import clsx from "clsx";
import styles from "./styles.module.scss";


export default function ProjectDetails() {
  const {query: { id }} = useRouter();
  const [project, setProject] = useState<ProjectData>();
  
  useEffect(() => {
    PROJECTS.forEach((p) => {
      if (p.id === id) setProject(p);
    });
  }, [id]);

  if (!project) return (
    <Page title='Projects'>
      <section className={styles.project}>
        <h1>Project is not found</h1>
      </section>
    </Page>
  );

  return (
    <Page title='Projects'>
      <section className={styles.projectDetails}>
        <div className={styles.project}>
          <h1>
            <span className={styles.title}>{project.title}</span>
            <span 
              className={clsx(
                styles.status, 
                project.status==='completed' ? styles.statusClose : styles.statusOpen
              )}
            >{project.status}</span>
          </h1>

          <p className={styles.description}>{project.description}</p>

          <ul className={styles.steck}>
            {project.steck.map((s, i) => (
              <li
                key={i}
                className={styles.steckItem}
              >{s}</li>
            ))}
          </ul>
          
          <ul className={styles.characteristics}>
            <li>
              <span className={styles.field}>Category:</span>
              <span className={styles.value}>{project.category}</span>
            </li>
            <li>
              <span className={styles.field}>Type:</span>
              <span className={styles.value}>{project.type}</span>
            </li>
          </ul>

          {project.github ? (
            <Link
              href={project.github}
              target='_blank'
              className={styles.visitGitHubLink}
            >
              <Icon 
                name='github' 
                className={styles.icon} 
                width={17} height={17} 
              />
              <span>View code on GitHub</span>
            </Link>
          ) : null}

          <div className={styles.buttons}>
            <Link
              href={project.url}
              target='_blank'
              className={styles.visitLink}
            >
              <Icon
                name='external-link'
                className={styles.icon}
                width={20} height={20} 
              />
              <span>Visit this app</span>
            </Link>
          </div>
        </div>
      </section>
    </Page>
  )
}