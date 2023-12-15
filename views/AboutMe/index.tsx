import Link from 'next/link';
import clsx from 'clsx';
import { certificate } from '../../lib/samples';
import Certificate from '../../components/Certificate/index';
import styles from "./styles.module.scss";


const resumes = [
  {name: 'FE 1'},
  {name: 'FE 2'},
  {name: 'GW'},
]

const links = [
  {name: 'N'},
  {name: 'N'},
  {name: 'N'},
  {name: 'N'},
  {name: 'N'},
  {name: 'N'},
]

export default function AboutMe() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.leftPartOfBlock}>
          <h1 className={styles.name}>About Me</h1>
          <p className={styles.position}>Position</p>
          <p className={styles.profile}>Profile</p>
        </div>

        <div className={styles.rightPartOfBlock}></div>
      </section>
    
      <section className={styles.certificates}>
        <div className={styles.certificatesWrap}>
          {certificate.map(c => <Certificate />)}
        </div>
      </section>
    
      <section className={styles.contacts}>
        <div className={clsx(styles.leftPartOfBlock, styles.leftPartOfContacts)}>
          <p className={styles.phone}>Phone</p>
          <p className={styles.email}>Email</p>

          <nav className={styles.resumes}>
            {resumes.map((r) => 
              <Link 
                target={'_blank'} 
                href={'#'} 
                className={styles.resume}
              >{r.name}</Link>
            )}
          </nav>
        </div>

        <div className={clsx(styles.rightPartOfBlock, styles.rightPartOfContacts)}>
          <nav className={styles.links}>
            {links.map((l) => 
              <Link 
                target={'_blank'} 
                href={'#'} 
                className={styles.link}
              >{l.name}</Link>
            )}
          </nav>
        </div>
      </section>
    </>
  )
}