import Link from 'next/link';
import styles from './styles.module.scss';


type CertificateProps = { 
  data: {
    name: string,
    provider: string,
    date: string,
    color: string,
  }
}

 
export default function Certificate({data}: CertificateProps) {
  return (
    <section className={styles.certificate}>
      <h2 className={styles.name}>{data.name}</h2>
      <hr className={styles.line} style={{backgroundColor: data.color}} />
      <p className={styles.provider}>{data.provider}</p>
      <p className={styles.data}>{data.date}</p>
    </section>
  )
}
