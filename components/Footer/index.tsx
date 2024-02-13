import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { linksForContact } from '../../lib/samples/samples';
import styles from './styles.module.scss';
import logo from '../../public/logo.svg';


const links = [
  {title: 'Blog', url: '/blog'},
  {title: 'Projects', url: '/projects'},
  {title: 'About Me', url: '/about-me'},
]

 
export default function Footer() {
  return (
    <footer className={styles.footer}>
        <ul className={styles.navigation}>
          {links.map((l, i) => (
            <li key={i} className={styles.linkWrap}>
              <Link className={styles.link} href={l.url}>{l.title}</Link>
            </li>
          ))}
        </ul>

        <Link href={`/`} style={{height: '120px'}}>
          <Image src={logo} alt='logo' height={120} />
        </Link>

        <section className={styles.contacts}>
          <p className={styles.phone_mail}>mark12bord@gmail.com</p>
          <p className={styles.phone_mail}>+380 95 762 56 69</p>

          <ul className={styles.socialNetworks}>
            {linksForContact.map((lfc, i) => (
              <li key={i} className={styles.socialNetworkWrap}>
                <Link href={lfc.url} target={'_blank'} className={styles.socialNetwork}>
                  <Icon icon={lfc.icon} width={40} />  
                </Link>
              </li>
            ))}
          </ul>
        </section>
    </footer>
  )
}
