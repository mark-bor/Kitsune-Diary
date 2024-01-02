import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app';
import "../styles/global.scss";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
 
export default function TheKitsuneDiary({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  )
}

