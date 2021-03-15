import Link from 'next/link'

import styles from "./Lesson.module.scss";

interface ILesson {
    orderNumber: number;
    title: string;
    subTitle: string;
}

const Lesson: React.FC<ILesson> = ({
    orderNumber,
    title,
    subTitle,
}) => {
    return (
        <Link href="#">
            <a className={ styles.block }>
                <div className={ styles.content }>
                    <div className={ styles.orderNumber }>
                        { orderNumber }
                    </div>
                    <div className={ styles.description }>
                        <div className={ styles.title }>{ title }</div>
                        <div className={ styles.subTitle }>
                            { subTitle }
                        </div>
                    </div>
                </div>

                <span className={ styles.arrow }>
                    <svg
                        width="13"
                        height="25"
                        viewBox="0 0 17 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.08318 1.66682L14.9165 14.5002L2.08318 27.3335"
                            stroke="#77B5FE"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </a>
        </Link>
    );
};

export { Lesson };
