import Link from 'next/link'

import { Layout } from '~/components'
import { Lesson } from './Lesson'

import { lessons } from './lessons'

import styles from './Course.module.scss'

const Course = () => {
    return (
        <Layout>
            <div className={ styles.courseBlock }>
                <Link href="/courses">
                    <a className={ styles.goBack }>
                        <div className={ styles.goBackIcon }>
                            <i>
                                <svg
                                    width="18"
                                    height="36"
                                    viewBox="0 0 17 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.08318 1.66682L14.9165 14.5002L2.08318 27.3335"
                                        stroke="#77B5FE"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </i>
                        </div>
                        <div className={ styles.goBackTitle }>Алфавит</div>
                    </a>
                </Link>
                {
                    lessons.map(lesson => (
                        <Lesson
                            key={ lesson.orderNumber }
                            lesson={ lesson }
                        />
                    ))
                }
            </div>
        </Layout>
    );
};

export { Course };
