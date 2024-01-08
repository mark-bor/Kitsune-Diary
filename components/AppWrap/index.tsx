import { useAppSelector } from '../../lib/redux/hook'
import { Inter } from 'next/font/google'

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

export default function AppTheme({children}: AppThemeData) {
    const theme = useAppSelector(state => state.theme);

    return (
        <div className={inter.className} data-theme={theme}>
            {children}
        </div>
    )
}