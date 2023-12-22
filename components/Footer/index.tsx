import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import styles from './styles.module.scss';
import logo from '../../public/logo.svg';


const links = [
  {title: 'Blog', url: '/blog'},
  {title: 'Projects', url: '/projects'},
  {title: 'About Me', url: '/about-me'},
]

const socialMedia = [
  {
    title: 'linkedin', 
    icon: 'mingcute:linkedin-line', 
    url: 'https://www.linkedin.com/in/mark-bordakov-8441bb241/'
  },
  {
    title: 'whatsapp', 
    icon: 'mingcute:whatsapp-line', 
    url: 'https://wa.me/+380957625669'
  },
  {
    title: 'telegram', 
    icon: 'mingcute:telegram-line', 
    url: 'https://t.me/marchi003'
  },
]

 
export default function Footer() {
  return (
    <footer className={styles.footer}>
        <ul className={styles.navigation}>
          {links.map((l) => (
            <li className={styles.linkWrap}>
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
            {socialMedia.map((sml) => (
              <li className={styles.socialNetworkWrap}>
                <Link href={sml.url} target={'_blank'} className={styles.socialNetwork}>
                  <Icon icon={sml.icon} width={40} color='#000000' />  
                </Link>
              </li>
            ))}
          </ul>
        </section>
    </footer>
  )
}
