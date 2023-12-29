import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
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

 
export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className={clsx(styles.header, menu ? styles.activeHeader : null)}>
      <Link href={`/`} className={styles.logo}>
        <Image src={logo} alt='logo' height={36}/>
      </Link>

      <nav className={clsx(styles.navigation, menu ? styles.activeMenu : null)}>
        <ul>
          {links.map((l) => (
            <li className={styles.linkWrap}>
              <Link className={styles.link} href={l.url}>{l.title}</Link>
            </li>
          ))}
        </ul>

        <div className={styles.options}>
          <div className={styles.option}></div>
          <div className={styles.option}></div>
        </div>

        <ul className={styles.socialNetworks}>
          {socialMedia.map((sml) => (
            <li className={styles.socialNetworkWrap}>
              <Link href={sml.url} target={'_blank'} className={styles.socialNetwork}>
                <Icon icon={sml.icon} width={40} color='#000000' />  
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className={styles.menuButton} onClick={() => setMenu(!menu)}>
        <Icon icon={menu ? 'akar-icons:cross' : 'radix-icons:hamburger-menu'} width={30} />
      </button>
    </header>
  )
}
