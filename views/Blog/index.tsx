import Link from "next/link";
import { Icon } from "@iconify/react";
import Page from "../../components/Page/index";
import { articles } from "../../lib/samples";
import styles from "./styles.module.scss";


const links = [
  {name: 'twiterX', icon: 'fa6-brands:square-x-twitter', url: '#'},
  {name: 'telegram', icon: 'logos:telegram', url: '#'},
  {name: 'instagram', icon: 'skill-icons:instagram', url: '#'},
]


export default function Blog() {
  return (
    <Page title='The Kitsune Diary | Blog'>
      <section className={styles.links}>
        <h1 className={styles.title}>Blog in social media:</h1>

        <ul className={styles.linksList}>
          {links.map((l) => (
            <li className={styles.linkWrap}>
              <Link href={l.url} className={styles.link}>
                <Icon 
                  icon={l.icon} 
                  name={l.name} 
                  width={40}
                  color={l.name='twiterX' ? '#000000' : ''}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ul className={styles.articles}>
        {articles.map((a) => (
          <li className={styles.articleLinkWrap}>
            <Link href={a.url} className={styles.articleLink}></Link> 
          </li>
        ))}
      </ul>
    </Page>
  )
}