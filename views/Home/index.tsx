import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";


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


export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.text}>Welcome to Kitsune Diary!</h1>
      </section>

      <section className={styles.technologies}>
        <h2 className={styles.title}>Technologies that I used in this website:</h2>

        <ul className={styles.technologiesList}>
          {technologies.map((t) => (
            <li className={styles.technology}>
              <Icon 
                icon={t.icon} 
                width={50} 
                color={t.icon==='simple-icons:swiper' ? '#6332F6' : undefined}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}