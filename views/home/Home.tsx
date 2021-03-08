import { Layout } from '~/components';
import Image from 'next/image'

import styles from './Home.module.scss'

const Home = () => {
    return (
        <Layout>
            <div className={ styles.header }>
                <h1 className={ styles.title }>Арабский алфавит</h1>

                <div className={ styles.logo }>
                    <Image  src="/images/logo.png" alt="" width="178" height="178" />
                </div>
            </div>

            <div className={ styles.content }>
                <p className="text-bold">С именем Аллаха, Милостивого, Милосердного.</p>
                <p>Программа обучения данного приложения состоит из 4
                    уровней:</p>
                <p>1) 1 уровень. Знакомство с буквами арабского алфавита.</p>
                <p>2) 2 уровень. Соединение букв в слова.</p>
                <p>3) 3 уровень. Знакомство с дополнительными правилами
                    чтения.</p>
                <p>4) 4 уровень. Правила таджвида.</p>
                <p className="text-bold">Версия 1.0.0</p>
            </div>
        </Layout>
    )
}

export { Home }
