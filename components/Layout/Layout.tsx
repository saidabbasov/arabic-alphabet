import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import styles from './Layout.module.scss'

import logo from '~/public/images/logo.png'

interface Layout {
    title?: string
}

const Layout: FC<Layout> = ({
    children,
    title,
}) => {
    return (
        <>
            <Head>
                <title>{ title ?? 'Арабский алфавит' }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={ styles.root }>
                <div className={ styles.sidebar }>
                    <div className={ styles.logo }>
                        <Image className={ styles.logoImage } src="/images/logo.png" alt="" width="100" height="100" />
                        <div className={ styles.logoText }>Арабский <br /> алфавит</div>
                    </div>
                    <div className={ styles.buttons }>
                        <a className={ styles.button }>Уроки</a>
                        <a className={ styles.button }>Алфавит</a>
                        <a className={ styles.button }>Коран</a>
                        <a className={ styles.button }>О нас</a>
                    </div>
                </div>
                <div className={ styles.content }>
                    { children }
                </div>
            </section>
        </>
    )
}

export { Layout };
