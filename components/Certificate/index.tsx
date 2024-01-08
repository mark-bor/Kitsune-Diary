import clsx from "clsx";
import styles from "./styles.module.scss";


type CertificateProps = {
  data: {
    name: string,
    color: string,
    provider: string,
    date: string,
  },
  isActive?: boolean
}

 
export default function Certificate({data, isActive = true}: CertificateProps) {
  return (
    <section className={clsx(styles.certificate, isActive ? styles.certificateActive : null)}>
      <h2 className={styles.certificateName}>{data.name}</h2>
      <hr className={styles.line} style={{backgroundColor: data.color}} />
      <p className={styles.provider}>{data.provider}</p>
      <p className={styles.data}>{data.date}</p>
    </section>
  )
}
