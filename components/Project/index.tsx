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
  
  const toggleInform = () => {
    setInform(!inform)
  }

  return (
    <section className={styles.project}>
      <div className={clsx(styles.information, inform ? styles.active : null)}>
        <button 
          className={styles.button}
          onClick={toggleInform}
        >
          <Icon name={inform ? 'x' : 'info'} width={20} height={20} />
        </button>

        {inform ? (
          <>
            <p className={styles.description}>{data.description}</p>

            <ul className={styles.steckList}>
              {data.steck.map((s, i) => (
                <li key={i} className={styles.steckItem}>{s}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>

      <h2>
        <Link href={data.url} target='_blank' className={styles.title}>{data.title}</Link>
        <span 
          className={clsx(
            styles.status, 
            data.status==='completed' ? styles.statusClose : styles.statusOpen
          )}
        >{data.status}</span>
      </h2>

      <p className={styles.description}>{data.description}</p>

      <p className={styles.kindOf}>{data.category}</p>
    </section> 
  )
}
