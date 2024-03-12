import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Icon from "../Icon/index";
import { ProjectData } from "../../lib/samples/PROJECTS";
import styles from "./styles.module.scss";


type ProjectProps = {
  data: ProjectData,
}


export default function Project({data}: ProjectProps) {
  const [inform, setInform] = useState(false);
  
  const toggleInform = (event: any) => {
    event.preventDefault();
    setInform(!inform);
  }

  return (
    <Link href={`/projects/${data.id}`} className={styles.project}>
      <div className={clsx(styles.information, inform ? styles.active : null)}>
        <button 
          className={styles.button}
          onClick={toggleInform}
        >
          {
            inform ? (
              <Icon name={inform ? 'x' : 'info'} width={20} height={20} /> 
            ) : (
              'i'
            )
          }
        </button>

        {inform ? (
          <>
            <p className={styles.description}>{data.description}</p>

            {(data.steck && data.steck.length>0) ? (
              <ul className={styles.steck}>
                {data.steck?.slice(0, 5).map((s, i) => (
                  <li key={i} className={styles.steckItem}>{s}</li>
                ))}
                {(data.steck.length-5)>0 ? (
                  <li className={clsx(styles.steckItem, styles.more)}>{data.steck.length-5}+</li>
                ) : null}
              </ul>
            ) : null}
          </>
        ) : null}
      </div>

      <h2>
        <span className={styles.title}>{data.title}</span>
        <span 
          className={clsx(
            styles.status, 
            data.status==='completed' ? styles.statusClose : styles.statusOpen
          )}
        >{data.status}</span>
      </h2>

      <p className={styles.description}>{data.description}</p>

      <p className={styles.kindOf}>{data.category}</p>
    </Link> 
  )
}
