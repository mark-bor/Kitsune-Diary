import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import styles from "./styles.module.scss";
import 'swiper/css';
import 'swiper/css/bundle';


const technologies = [
  {icon: 'devicon:html5'},
  {icon: 'devicon:css3'},
  {icon: 'devicon:sass'},
  {icon: 'devicon:javascript'},
  {icon: 'devicon:typescript'},
  {icon: 'devicon:react'},
  {icon: 'devicon:nextjs'},
  {icon: 'devicon:redux'},
  {icon: 'simple-icons:swiper'},
  {icon: 'logos:headlessui-icon'},
]


export default function TechnologiesList() {
  return (
    <>
      <section className={styles.technologies}>
        <h2 className={styles.title}>Technologies that I used in this website:</h2>

        <Swiper
          className={styles.technologiesList}
          centeredSlides={false}
          spaceBetween={40}
          slidesPerView={'auto'}
        >
          {technologies.map((t, i) => (
            <SwiperSlide key={i} className={styles.technology}>
              <Icon 
                icon={t.icon} 
                width={50} 
                color={t.icon==='simple-icons:swiper' ? '#6332F6' : undefined}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={styles.technologiesMobile}>
        <h2 className={styles.title}>Technologies that I used in this website:</h2>

        <Swiper
          className={styles.technologiesList}
          modules={[FreeMode, Autoplay]}
          centeredSlides={false}
          spaceBetween={40}
          slidesPerView={'auto'}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 300,
            disableOnInteraction: false,
          }}
        >
          {technologies.map((t, i) => (
            <SwiperSlide key={i} className={styles.technology}>
              <Icon 
                icon={t.icon} 
                width={50} 
                color={t.icon==='simple-icons:swiper' ? '#6332F6' : undefined}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}