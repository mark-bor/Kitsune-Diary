import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
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
          <p className={styles.profile}>Dedicated and enthusiastic Junior Front-end Developer with a passion for crafting seamless and user-centric web applications using React and TypeScript. With a solid foundation in web development, I am eager to leverage my skills and creativity to contribute to projects that demand innovative solutions and exceptional user experiences.</p>
        </div>

        <div className={styles.rightPartOfBlock}>
          <Image src={portrait} alt='portrait' className={styles.portrait} />
          <i className={styles.name}>Mark Bordakov - Front-end developer</i>
        </div>
      </section>
    
      <CertificatesList />
    
      <section className={styles.contacts}>
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
                width={25} 
                color={sn.icon==='cib:upwork' ? '#14A800' : ''} 
              />
              <span className={styles.linkName}>{sn.name}</span>
            </Link>
          )}
        </nav>

        <div className={styles.leftPartOfBlock}>
          <p className={styles.emailAndPhone}>
            <span>mark12bord@gmail.com</span>
            <span>+380957625669</span>
          </p>
        </div>

        <div className={styles.rightPartOfBlock}>
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
      </section>
    </Page>
  )
}