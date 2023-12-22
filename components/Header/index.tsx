import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';
import logo from '../../public/logo.svg';


const links = [
  {title: 'Blog', url: '/blog'},
  {title: 'Projects', url: '/projects'},
  {title: 'About Me', url: '/about-me'},
]

 
export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={`/`} className={styles.logo}>
        <Image src={logo} alt='logo' height={36}/>
      </Link>

      <ul className={styles.navigation}>
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
    </header>
  )
}
