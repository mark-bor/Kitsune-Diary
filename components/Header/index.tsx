import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { Icon } from '@iconify/react';
import { linksForContact } from '../../lib/samples';
import styles from './styles.module.scss';
import logo from '../../public/logo.svg';


const links = [
  {title: 'Blog', url: '/blog'},
  {title: 'Projects', url: '/projects'},
  {title: 'About Me', url: '/about-me'},
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
          {links.map((l, i) => (
            <li key={i} className={styles.linkWrap}>
              <Link className={styles.link} href={l.url}>{l.title}</Link>
            </li>
          ))}
        </ul>

        <div className={styles.options}>
          <div className={styles.option}></div>
          <div className={styles.option}></div>
        </div>

        <ul className={styles.socialNetworks}>
          {linksForContact.map((lfc, i) => (
            <li key={i} className={styles.socialNetworkWrap}>
              <Link href={lfc.url} target={'_blank'} className={styles.socialNetwork}>
                <Icon icon={lfc.icon} width={40} color='#000000' />  
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
