import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Page from '../../components/Page/index';
import CertificatesList from '../../components/CertificatesList/index';
import { resumes, socialNetworks } from '../../lib/samples/samples';
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
    <Page title='About Me'>
      <section className={styles.hero}>
        <div className={styles.leftPartOfBlock}>
          <p className={styles.profile}>👋 Hi, I'm a skilled Front-end developer with over 6 months of experience. I specialize in creating responsive, user-friendly web interfaces with server communication using HTML, CSS, JavaScript, TypeScript, React, and Vue.</p>
          <p className={styles.profile}>🌟 I like turning ideas into interactive web applications and collaborating with cross-functional teams to deliver exceptional results. I'm always eager to learn and stay up-to-date with the latest web technologies.</p>
        </div>

        <div className={styles.rightPartOfBlock}>
          <Image src={portrait} alt='portrait' className={styles.portrait} />
          <i className={styles.name}>Mark Bordakov - Front-end developer</i>
        </div>
      </section>
    
      <CertificatesList />
    
      <section className={styles.contacts}>
        <nav className={styles.links}>
          {socialNetworks.map((sn, i) => 
            <Link 
              key={i}
              target={'_blank'} 
              href={sn.url} 
              className={styles.link}
            >
              <Icon 
                icon={sn.icon} 
                name={sn.name} 
                width={20} 
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
              {resumes.map((r, i) => 
                <li key={i}>
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