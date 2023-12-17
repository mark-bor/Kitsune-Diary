import Link from "next/link";
import { articles } from "../../lib/samples";
import styles from "./styles.module.scss";


const links = [
  {name: 'T', url: '#'},
  {name: 'T', url: '#'},
  {name: 'I', url: '#'},
]

export default function Blog() {
  return (
    <>
      <section className={styles.links}>
        <h1 className={styles.title}>Blog in social media:</h1>

        <ul className={styles.linksList}>
          {links.map((l) => (
            <li className={styles.linkWrap}>
              <Link href={l.url} className={styles.link}>{l.name}</Link>
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
    </>
  )
}