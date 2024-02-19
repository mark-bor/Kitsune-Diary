import { Icon } from "@iconify/react";
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
  {icon: "devicon:nextjs", name: "Next"},
  {icon: "devicon:redux", name: "Redux"},
  {icon: "simple-icons:swiper", name: "Swiper"},
  {icon: "logos:headlessui-icon", name: "HeadlessUI"},
  {icon: "https://lucide.dev/logo.light.svg", name: "Lucide"},
]


export default function TechnologiesList() {
  return (
    <section className={styles.technologies}>
      <h2 className={styles.title}>Technologies and libraries that were used in the development of this website:</h2>

      <ul className={styles.technologiesList}>
        {technologies.map((t, i) => (
          <li key={i} className={styles.technology}>
            { t.name==='Lucide' ? (
              <img src={t.icon} alt={t.name} width={30} height={30} />
            ) : (
              <Icon 
                icon={t.icon} 
                width={30} 
                color={t.icon==='simple-icons:swiper' ? '#6332F6' : undefined}
              />
            )}
            <span>{t.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}