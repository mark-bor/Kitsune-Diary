import Link from "next/link";
import clsx from "clsx";
import Icon from "../Icon/index";
import styles from "./styles.module.scss";


type ArticleProps = {
  data: {
    id: number,
    url: string,
    title: string,
    date: string,
    readingTime: number
  },
}

const reformatDate = (date: string) => {
  const inputDate = new Date(date);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const formattedDate = `${months[inputDate.getMonth()]} ${inputDate.getDate()}, ${inputDate.getFullYear()}`;
  return formattedDate;
};
 
export default function Article({data}: ArticleProps) {
  return (
    <div className={styles.article}>
      <Link href={data.url} className={styles.image}></Link>

      <Link href={data.url} className={styles.title}>{data.title}</Link>
      
      <p className={styles.articleFooter}>
        <span className={styles.readingTime}>{data.readingTime} min</span>  
        <span className={styles.date}>{reformatDate(data.date)}</span>
      </p>
    </div> 
  )
}
