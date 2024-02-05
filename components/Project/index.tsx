import Link from "next/link";
import clsx from "clsx";
import styles from "./styles.module.scss";


type ProjectProps = {
  data: {
    id: number,
    url: string,
    title: string,
    description: string,
    kindOf: string,
    category: string,
    staus: string,
  },
}


export default function Project({data}: ProjectProps) {
  return (
    <Link href={data.url} target='_blank' className={styles.project}>
      <h2>
        <span className={styles.title}>{data.title}</span>
        <span 
          className={clsx(
            styles.status, 
            data.staus==='in process' ? styles.statusOpen : styles.statusClose
          )}
        >{data.staus}</span>
      </h2>

      <p className={styles.description}>{data.description}</p>

      <p className={styles.kindOf}>{data.kindOf}</p>
    </Link> 
  )
}
