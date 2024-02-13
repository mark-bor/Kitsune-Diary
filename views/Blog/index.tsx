import Link from "next/link";
import { Icon } from "@iconify/react";
import { articles } from "../../lib/samples/samples";
import Page from "../../components/Page/index";
import Article from "../../components/Article/index";
import styles from "./styles.module.scss";


const links = [
  {name: 'twiterX', icon: 'fa6-brands:x-twitter', url: '#'},
  {name: 'telegram', icon: 'logos:telegram', url: '#'},
  {name: 'instagram', icon: 'skill-icons:instagram', url: '#'},
]


export default function Blog() {
  return (
    <Page title='Blog'>
      <section className={styles.links}>
        <h1 className={styles.title}>Blog in social media:</h1>

        <ul className={styles.linksList}>
          {links.map((l, i) => (
            <li key={i} className={styles.linkWrap}>
              <Link href={l.url} className={styles.link}>
                <Icon icon={l.icon} name={l.name} width={40}/>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ul className={styles.articles}>
        {articles.map((a, i) => (
          <li key={i} className={styles.articleLinkWrap}>
            <Article data={a} />
          </li>
        ))}
      </ul>
    </Page>
  )
}