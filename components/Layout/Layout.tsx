import { FC } from 'react'

import Head from 'next/head'

interface Layout {
    title?: string
}

export const Layout: FC<Layout> = ({
    children,
    title,
}) => {
    return (
        <>
            <Head>
                <title>{ title ?? 'Арабский алфавит' }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            { children }
        </>
    )
}
