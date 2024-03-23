import { useState, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { links } from "../../lib/samples/samples";
import { articleFilters, ARTICLES, ArticleData } from "../../lib/samples/ARTICLES";
import Page from "../../components/Page/index";
import Article from "../../components/Article/index";
import clsx from "clsx";
import styles from "./styles.module.scss";


export default function Blog() {
  const [filter, setFilter] = useState<string>('all');

  const articles: ArticleData[] = useMemo(() => {
    if (filter==='all' || !filter) return ARTICLES;
    return ARTICLES.filter((a) => a.type===filter);
  }, [filter]);

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

      <ul className={styles.articleFilters}>
        {articleFilters.map((f, i) => (
          <li className={f.key===filter ? styles.active : ''}>
            <button 
              key={i}
              className={styles.articleFilter}
              onClick={() => setFilter(f.key)}
            >{f.label}</button>
          </li>
        ))}
      </ul>

      {(articles && articles.length>0) ? (
        <ul className={styles.articles}>
          {articles.map((a, i) => (
            <li key={i} className={styles.articleLinkWrap}>
              <Article data={a} />
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles.message}>No articles</h2>
      )}
    </Page>
  )
}