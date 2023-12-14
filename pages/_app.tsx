import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import "../styles/global.scss";

 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Kitsune Diary</title>
      </Head>
      
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

