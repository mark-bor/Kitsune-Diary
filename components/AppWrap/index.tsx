import { useAppSelector } from '../../lib/redux/hook'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import styles from './styles.module.scss'

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['sans-serif'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  })

type AppThemeData = {
    children: any
}

export default function AppWrap({children}: AppThemeData) {
    const theme = useAppSelector(state => state.theme);

    return (
        <div className={clsx(inter.className, styles.appWrap)} data-theme={theme}>
            {children}
        </div>
    )
}