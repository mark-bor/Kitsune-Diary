import { useState, useEffect } from 'react'
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

type AppWrapProps = {
    children: any
}

export default function AppWrap({children}: AppWrapProps) {
    const appTheme = useAppSelector(state => state.theme);
    const [theme, setTheme] = useState<string>('dark');
    const [font, setFont] = useState<string>();

    useEffect(() => setTheme(appTheme.theme), [appTheme]);
    useEffect(() => setFont(inter.className), []);
    
    return (
        <div 
            id='app-wraper'
            className={clsx(styles.appWrap, font)} 
            data-theme={theme}
        >
            <div className={styles.gradient}></div>
            {children}
        </div>
    )
}