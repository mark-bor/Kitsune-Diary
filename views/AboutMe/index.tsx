import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import Page from '../../components/Page/index';
import Certificate from '../../components/Certificate/index';
import { certificate } from '../../lib/samples';
import portrait from '../../public/portrait.jpg';
import styles from "./styles.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';


const resumes = [
  {name: 'FE 1', color: '#672D50', url: 'https://flowcv.com/resume/rrmtgok5b3'},
  {name: 'GW', color: '#D9D9D9', url: 'https://flowcv.com/resume/vffhu00pnf'},
  {name: 'FE 2', color: '#502C84', url: 'https://takct-server.netlify.app/CV/M%20Bordakov%20-%20Front-end.pdf'},
]

const links = [
  {name: 'linkedin', icon: 'devicon:linkedin', url: 'https://www.linkedin.com/in/mark-bordakov-8441bb241/'},
  {name: 'github', icon: 'devicon:github', url: 'https://github.com/mark-bor?tab=repositories'},
  {name: 'upwork', icon: 'cib:upwork', url: 'https://www.upwork.com/freelancers/~01b8a9c8c7e06fb645'},
  {name: 'whatsapp', icon: 'logos:whatsapp-icon', url: 'https://wa.me/+380957625669'},
  {name: 'telegram', icon: 'logos:telegram', url: 'https://t.me/marchi003'},
]

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
    
      <section className={styles.certificates}>
        <Swiper
          className={styles.certificatesWrap}
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect='coverflow'
          // spaceBetween={30}
          centeredSlides={true}
          slidesPerView={3}
          // loop={true}
          navigation
          pagination={{clickable: true}}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {certificate.map((c) => (
            <SwiperSlide className={styles.certificate}>
              <h2 className={styles.certificateName}>{c.name}</h2>
              <hr className={styles.line} style={{backgroundColor: c.color}} />
              <p className={styles.provider}>{c.provider}</p>
              <p className={styles.data}>{c.date}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    
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
            {links.map((l) => 
              <Link 
                target={'_blank'} 
                href={l.url} 
                className={styles.link}
              >
                <Icon 
                  icon={l.icon} 
                  name={l.name} 
                  width={50} 
                  color={l.icon==='cib:upwork' ? '#14A800' : ''} 
                />
              </Link>
            )}
          </nav>
        </div>
      </section>
    </Page>
  )
}