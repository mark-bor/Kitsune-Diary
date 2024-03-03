import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { CERTIFICATES } from '../../lib/samples/CERTIFICATES';
import Certificate from '../Certificate/index';
import clsx from "clsx";
import styles from "./styles.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';

 
export default function CertificatesList() {
  return (
    <>
      <section className={styles.certificates}>
        <Swiper
          className={clsx(styles.certificatesList, styles.desktop)}
          modules={[Navigation, Pagination]}
          centeredSlides={true}
          slidesPerView={1}
          navigation
          pagination={{clickable: true}}
        >
          {CERTIFICATES.map((c, i) => (
            <SwiperSlide 
              key={i}
              className={styles.certificateWrap} 
              style={{width: 'auto', marginRight: 0}}
            >
              {({ isActive }) => (
                <Certificate data={c} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={styles.certificates}>
        <Swiper
          className={clsx(styles.certificatesList, styles.mobile)}
          modules={[Pagination]}
          centeredSlides={true}
          slidesPerView={1}
          pagination={{clickable: true}}
        >
          {CERTIFICATES.map((c, i) => (
            <SwiperSlide key={i} className={styles.certificateWrap}>
              <Certificate data={c} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}
