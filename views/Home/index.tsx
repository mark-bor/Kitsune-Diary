import { useState, useEffect } from 'react';
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
  const [font, setFont] = useState<string>();

  useEffect(() => setFont(rubik.className), [rubik]);

  return (
    <Page>
      <section className={styles.hero}>
        <h1 className={clsx(font, styles.text)}>Welcome to Kitsune Diary!</h1>
      </section>

      <TechnologiesList />
    </Page>
  )
}