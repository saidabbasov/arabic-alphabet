import { Layout } from '~/components';
import { Course } from '~/views/courses/Course';

import styles from './Courses.module.scss'

import { coursesData } from './coursesData';

const Courses = () => {
    return (
        <Layout>
            <div className={ styles.items }>
                {
                    coursesData.map(course => (
                        <Course
                            key={ course.id }
                            description={ course.description }
                            image={ course.image }
                            id={ course.id }
                            title={ course.title }
                            subtitle={ course.subtitle }
                        />)
                    )
                }
            </div>
        </Layout>
    )
}

export { Courses }
