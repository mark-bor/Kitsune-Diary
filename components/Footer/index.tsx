import Link from 'next/link';
import styles from './styles.module.scss';

 
export default function Footer() {
  return (
    <footer className={styles.footer}>
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

        <Link href={`/`}>
          <img alt='logo' />
        </Link>

        <section className={styles.contacts}>
          <p className={styles.phone_mail}>mark12bord@gmail.com</p>
          <p className={styles.phone_mail}>+380 95 762 56 69</p>

          <ul className={styles.socialNetworks}>
              <li className={styles.socialNetworkWrap}>
                <a className={styles.socialNetwork} target={'_blank'} href={`#`}>W</a>  
              </li>
              <li className={styles.socialNetworkWrap}>
                <a className={styles.socialNetwork} target={'_blank'} href={`#`}>T</a>  
              </li>
              <li className={styles.socialNetworkWrap}>
                <a className={styles.socialNetwork} target={'_blank'} href={`#`}>G</a>  
              </li>
          </ul>
        </section>
    </footer>
  )
}
