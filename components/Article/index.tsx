import Link from "next/link";
import { ArticleData } from "../../lib/samples/ARTICLES";
import styles from "./styles.module.scss";


type ArticleProps = {
  data: ArticleData,
}

const reformatDate = (date: string) => {
  const inputDate = new Date(date);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const formattedDate = `${months[inputDate.getMonth()]} ${inputDate.getDate()}, ${inputDate.getFullYear()}`;
  return formattedDate;
};
 
export default function Article({data}: ArticleProps) {
  return (
    <Link href={data.url} className={styles.article}>
      <div 
        className={styles.image}
        style={{backgroundImage: `url(${data.image})`}}
      ></div>

      <div className={styles.details}>
        <h3>
          <span className={styles.title}>{data.title}</span>
          <span className={styles.type}>{data.type}</span>
        </h3>

        <div className={styles.articleFooter}>
          <p className={styles.readingTime}>{data.readingTime} min</p>  
          <p className={styles.date}>{reformatDate(data.date)}</p>
        </div>
      </div>
    </Link> 
  )
}
