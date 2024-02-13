import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { Icon as Brand } from '@iconify/react';
import Icon from '../Icon/index';
import { useAppDispatch } from '../../lib/redux/hook'
import { setTheme } from '../../lib/theme/themeSlice'
import { linksForContact } from '../../lib/samples/samples';
import Dropdown from '../../components/Dropdown/index';
import styles from './styles.module.scss';
import logo from '../../public/logo.svg';


const links = [
  {title: 'Blog', url: '/blog'},
  {title: 'Projects', url: '/projects'},
  {title: 'About Me', url: '/about-me'},
];

const themeItems = ['light', 'dark', 'auto'];

 
export default function Header() {
  const [menu, setMenu] = useState(false);
  const dispatch = useAppDispatch();

  const changeTheme = (theme: string) => {
    dispatch(setTheme({ theme }));
  }

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
          <Dropdown items={themeItems} click={changeTheme} className={styles.dropdown}>
            <Icon className={styles.option} name='sun-moon' width={26} height={26} />
          </Dropdown>
        </div>

        <ul className={styles.socialNetworks}>
          {linksForContact.map((lfc, i) => (
            <li key={i} className={styles.socialNetworkWrap}>
              <Link href={lfc.url} target={'_blank'} className={styles.socialNetwork}>
                <Brand icon={lfc.icon} width={40} />  
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button 
        className={clsx(styles.menuButton, menu ? styles.close : null)} 
        onClick={() => setMenu(!menu)}
      >
      </button>
    </header>
  )
}
