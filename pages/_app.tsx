import { useRef } from 'react'
import Head from 'next/head';
import type { AppProps } from 'next/app';
import AppWrap from '../components/AppWrap/index';
import { makeStore, AppStore } from '../lib/redux/store'
import { Provider } from 'react-redux'
import "../styles/global.scss";


export default function TheKitsuneDiary({ Component, pageProps }: AppProps) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <Provider store={storeRef.current}>
      <AppWrap>
        <Head>
          <link rel="icon" href="./logo.svg"/>
        </Head>
        <Component {...pageProps} />
      </AppWrap>
    </Provider>
  )
}

