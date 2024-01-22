import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import styles from "./styles.module.scss";
import 'swiper/css';
import 'swiper/css/bundle';


const technologies = [
  {icon: "devicon:html5", name: "HTML"},
  {icon: "devicon:css3", name: "CSS"},
  {icon: "devicon:sass", name: "Sass"},
  {icon: "devicon:javascript", name: "JavaScript"},
  {icon: "devicon:typescript", name: "TypeScript"},
  {icon: "devicon:react", name: "React"},
  {icon: "devicon:nextjs", name: "Next.js"},
  {icon: "devicon:redux", name: "Redux"},
  {icon: "simple-icons:swiper", name: "Swiper"},
  {icon: "logos:headlessui-icon", name: "HeadlessUI"},
]


export default function TechnologiesList() {
  return (
    <section className={styles.technologies}>
      <h2 className={styles.title}>Technologies that I used in this website:</h2>

      <ul className={styles.technologiesList}>
        {technologies.map((t, i) => (
          <li key={i} className={styles.technology}>
            <Icon 
              icon={t.icon} 
              width={32} 
              color={t.icon==='simple-icons:swiper' ? '#6332F6' : undefined}
            />
            <span>{t.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}