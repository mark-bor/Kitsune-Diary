import clsx from "clsx";
import Icon from "../Icon/index";
import styles from "./styles.module.scss";


type CertificateProps = {
  data: {
    name: string,
    provider: string,
    description: string[],
    date: string,
    color: string,
    url: string,
  },
  isActive?: boolean
}

 
export default function Certificate({data, isActive = true}: CertificateProps) {
  return (
    <section className={clsx(styles.certificate)}>
      <div className={styles.certificateHeader}>
        <div className={styles.brand} style={{backgroundColor: data.color}}></div>
        <p className={styles.provider}>{data.provider}</p>
      </div>

      <a className={styles.certificateName} href={data.url} target='_blank'>
        <span>{data.name}</span>
        <Icon name={'external-link'} width={20} height={20} />
      </a>

      <hr className={styles.line} style={{backgroundColor: data.color}} />

      <ul className={styles.descriptionList}>
        {data.description.map((d, i) => (
          <li key={i} className={styles.description}>{d}</li>
        ))}
      </ul>

      <p className={styles.date}>{data.date}</p>
    </section>
  )
}
