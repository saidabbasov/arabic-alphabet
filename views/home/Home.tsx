import { Layout } from '~/components'

import styles from './Home.module.scss'

const Home = () => {
    return (
        <Layout>
            <h1 className={ styles.header }>Арабский алфавит</h1>
        </Layout>
    )
}

export { Home }
