import Page from '../../components/Page/index';
import TechnologiesList from '../../components/TechnologiesList/index';
import styles from "./styles.module.scss";
import 'swiper/css';
import 'swiper/css/bundle';


export default function Home() {
  return (
    <Page title='The Kitsune Diary'>
      <section className={styles.hero}>
        <h1 className={styles.text}>Welcome to Kitsune Diary!</h1>
      </section>

      <TechnologiesList />
    </Page>
  )
}