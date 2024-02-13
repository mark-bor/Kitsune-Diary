import Head from 'next/head';
import Header from "../Header/index";
import Footer from "../Footer/index";

type PageProps = {
    children: any
    title?: string
}

export default function Page({ children, title }: PageProps) {
  return (
    <>
      <Head>
        <title>Kitsune Diary {title ? `| ${title}` : ''}</title>
      </Head>
      
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

