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
  {icon: 'simple-icons:swiper'},
  {icon: 'logos:headlessui-icon'},
]


export default function TechnologiesList() {
  // const windowW = window.screen.width;
  // console.log(windowW);

  return (
    <>
      <Swiper
        className={styles.technologiesList}
        centeredSlides={false}
        spaceBetween={40}
        slidesPerView={'auto'}
      >
        {technologies.map((t) => (
          <SwiperSlide className={styles.technology}>
            <Icon 
              icon={t.icon} 
              width={50} 
              color={t.icon==='simple-icons:swiper' ? '#6332F6' : undefined}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Swiper
        className={styles.technologiesListMobile}
        modules={[FreeMode]}
        // centeredSlides={true}
        spaceBetween={40}
        slidesPerView={'auto'}
        freeMode={true}
        // loop={true}
        // autoplay={{
        //   delay: 0,
        //   duration: 3000,
        //   disableOnInteraction: false,
        // }}
      >
        {technologies.map((t) => (
          <SwiperSlide className={styles.technology}>
            <Icon 
              icon={t.icon} 
              width={50} 
              color={t.icon==='simple-icons:swiper' ? '#6332F6' : undefined}
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </>
  )
}