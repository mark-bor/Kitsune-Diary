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

type AppThemeData = {
    children: any
}

export default function AppWrap({children}: AppThemeData) {
    const theme = useAppSelector(state => state.theme);
    // const [position, setPosition] = useState(0);

    // const scroll = () => {
    //     const appWraper = document.getElementById('app-wraper');
    //     const imageLeft = Number(appWraper?.clientWidth) - window.innerHeight;
    //     const y: number = 100 * window.pageYOffset / imageLeft;
    //     setPosition(y);
    // }

    // useEffect(() => {
    //     if (window.innerWidth > 425) {
    //         scroll();
    //         window.addEventListener('scroll', scroll);
    //     }
    // })

    return (
        <div 
            id='app-wraper'
            className={clsx(inter.className, styles.appWrap)} 
            data-theme={theme}
            // style={{backgroundPositionY: `-${position}px`}}
        >
            <div className={styles.gradient}></div>
            {children}
        </div>
    )
}