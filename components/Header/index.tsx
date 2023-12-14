import Link from 'next/link';
import styles from './styles.module.scss';

 
export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={`/`}>
        <img alt='logo' />
      </Link>

      <ul className={styles.navigation}>
        <li className={styles.linkWrap}>
          <Link className={styles.link} href={`/blog`}>{'Blog'}</Link></li>
        <li className={styles.linkWrap}>
          <Link className={styles.link} href={`/projects`}>{'Projects'}</Link>
        </li>
        <li className={styles.linkWrap}>
          <Link className={styles.link} href={`/about-me`}>{'About Me'}</Link>
        </li>
      </ul>

      <div className={styles.options}>
        <div className={styles.option}></div>
        <div className={styles.option}></div>
      </div>
    </header>
  )
}
