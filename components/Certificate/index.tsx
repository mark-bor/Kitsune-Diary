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

      <h2 className={styles.certificateName}>{data.name}</h2>

      <hr className={styles.line} style={{backgroundColor: data.color}} />

      <ul className={styles.descriptionList}>
        {data.description.map(d => (
          <li className={styles.description}>{d}</li>
        ))}
      </ul>

      <p className={styles.date}>{data.date}</p>
      <a className={styles.link} href={data.url} target='_blank'>
        <Icon name={'external-link'} width={20} height={20} />
      </a>
    </section>
  )
}
