import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import Page from '../../components/Page/index';
import CertificatesList from '../../components/CertificatesList/index';
import { resumes, socialNetworks } from '../../lib/samples';
import portrait from '../../public/portrait.jpg';
import styles from "./styles.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';


export default function AboutMe() {
  return (
    <Page title='The Kitsune Diary | About Me'>
      <section className={styles.hero}>
        <div className={styles.leftPartOfBlock}>
          <h1 className={styles.name}>Mark Bordakov</h1>
          <p className={styles.position}>Front-end developer</p>
          <p className={styles.profile}>Dedicated and enthusiastic Junior Front-end Developer with a passion for crafting seamless and user-centric web applications using React and TypeScript. With a solid foundation in web development, I am eager to leverage my skills and creativity to contribute to projects that demand innovative solutions and exceptional user experiences.</p>
        </div>

        <div className={styles.rightPartOfBlock}>
          <Image src={portrait} alt='portrait' className={styles.portrait} />
        </div>
      </section>
    
      <CertificatesList />
    
      <section className={styles.contacts}>
        <div className={clsx(styles.leftPartOfBlock, styles.leftPartOfContacts)}>
          <p className={styles.email}>mark12bord@gmail.com</p>
          <p className={styles.phone}>+380957625669</p>

          <section className={styles.resumes}>
            <h2 className={styles.resumesTitle}>Resumes:</h2>

            <ul className={styles.resumesList}>
              {resumes.map((r) => 
                <li>
                  <Link 
                    target={'_blank'} 
                    href={r.url} 
                    className={styles.resume}
                    style={{
                      backgroundColor: r.color, 
                      color: r.color==='#D9D9D9' ? '#000000' : '#ffffff'
                    }}
                  >{r.name}</Link>
                </li>
              )}
            </ul>
          </section>
        </div>

        <div className={clsx(styles.rightPartOfBlock, styles.rightPartOfContacts)}>
          <nav className={styles.links}>
            {socialNetworks.map((sn) => 
              <Link 
                target={'_blank'} 
                href={sn.url} 
                className={styles.link}
              >
                <Icon 
                  icon={sn.icon} 
                  name={sn.name} 
                  width={50} 
                  color={sn.icon==='cib:upwork' ? '#14A800' : ''} 
                />
              </Link>
            )}
          </nav>
        </div>
      </section>
    </Page>
  )
}