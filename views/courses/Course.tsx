import { FC } from 'react';
import Link from 'next/link';

import Image from 'next/image'

import styles from './Course.module.scss'

interface CourseProps {
    description: string
    image: string
    id: string
    title: string
    subtitle: string
}

const Course: FC<CourseProps> = ({
    description,
    image,
    id,
    title,
    subtitle,
 }) => {
    return (
        <div className={ styles.item }>
            <div className={ styles.itemHeading }>
                <div className={ styles.titleContainer }>
                    <h1 className={ styles.title }>{ title }</h1>
                    <h3 className={ styles.subtitle }>{ subtitle }</h3>
                </div>
                <div className={ styles.image }>
                    <Image src={ image } alt="" width="114" height="114"/>
                </div>
            </div>
            <div className={ styles.description }>{ description }</div>
            <Link href={ `/course/${ id }` }>
                <a className={ styles.button }>Начать</a>
            </Link>
        </div>
    )
}

export { Course }
