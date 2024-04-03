import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import clsx from "clsx";
import Certificate from '../Certificate/index';
import { useGetAllCertificatesQuery } from '../../lib/api/certificates/index';
import styles from "./styles.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';

 
export default function CertificatesList() {
  const {
    data, isLoading,
    error, isError
  } = useGetAllCertificatesQuery('');

  if (isLoading) return (
    <section className={styles.messageSection}>
      <div className={styles.mirage}>
        <h2>Certificates are loading...</h2>
      </div>
    </section>
  );

  if (isError || !data) return (
    <section className={styles.messageSection}>
      <div className={styles.mirage}>
        <h2>Certificates cannot be loaded</h2>
      </div>
    </section>
  );
  
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
          {data.map((c, i) => (
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
          {data.map((c, i) => (
            <SwiperSlide key={i} className={styles.certificateWrap}>
              <Certificate data={c} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}
