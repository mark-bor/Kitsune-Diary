import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { certificate } from '../../lib/samples/samples';
import Certificate from '../Certificate/index';
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
          className={styles.certificatesList}
          modules={[Navigation, Pagination]}
          centeredSlides={true}
          slidesPerView={3}
          navigation
          pagination={{clickable: true}}
        >
          {certificate.map((c, i) => (
            <SwiperSlide 
              key={i}
              className={styles.certificateWrap} 
              style={{width: 'auto', marginRight: 0}}
            >
              {({ isActive }) => (
                <Certificate data={c} isActive={isActive} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={styles.certificatesMobile}>
        <Swiper
          className={styles.certificatesList}
          modules={[Pagination]}
          centeredSlides={true}
          slidesPerView={1}
          pagination={{clickable: true}}
        >
          {certificate.map((c, i) => (
            <SwiperSlide key={i} className={styles.certificateWrap}>
              <Certificate data={c} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}
