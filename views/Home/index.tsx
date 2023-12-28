import TechnologiesList from '../../components/TechnologiesList/index';
import styles from "./styles.module.scss";
import 'swiper/css';
import 'swiper/css/bundle';


export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.text}>Welcome to Kitsune Diary!</h1>
      </section>

      <section className={styles.technologies}>
        <h2 className={styles.title}>Technologies that I used in this website:</h2>

        <TechnologiesList />
      </section>
    </>
  )
}