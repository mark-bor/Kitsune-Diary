import Page from '../../components/Page/index';
import TechnologiesList from '../../components/TechnologiesList/index';
import { Rubik } from 'next/font/google'
import clsx from 'clsx'
import styles from "./styles.module.scss";

const rubik = Rubik({
  weight: '900',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <Page>
      <section className={styles.hero}>
        <h1 className={clsx(rubik.className, styles.text)}>Welcome to Kitsune Diary!</h1>
      </section>

      <TechnologiesList />
    </Page>
  )
}