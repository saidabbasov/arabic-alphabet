import React from "react";

import styles from "./Block.module.scss";

const Block = () => {
    return(
        <>
        <div className={styles.block}>
            <div className={styles.frame}>
                <div className={styles.frameLetters}>
                    <div className={styles.letterArabic}>I</div>
                    <div className={styles.letter}>K</div>
                </div>
            </div>
            <div className={styles.frame}>
                <div className={styles.frameLetters}>
                    <div className={styles.letterArabic}>I</div>
                    <div className={styles.letter}>С</div>
                </div>
            </div>
            <div className={styles.frame}>
                <div className={styles.frameLetters}>
                    <div className={styles.letterArabic}>I</div>
                    <div className={styles.letter}>Н</div>
                </div>
            </div>
            <div className={styles.frame}>
                <div className={styles.frameLetters}>
                    <div className={styles.letterArabic}>I</div>
                    <div className={styles.letter}>O</div>
                </div>
            </div>
           
        </div>
             <div className={styles.blockList}>
                <ol>
                    <li><span className={styles.blockListLetters}>O</span> - <span>Обособленный</span></li>
                    <li><span className={styles.blockListLetters}>Н</span> - <span>Начальный</span></li>
                    <li><span className={styles.blockListLetters}>С</span> - <span>Серединный</span></li>
                    <li><span className={styles.blockListLetters}>К</span> - <span>Конечный</span></li>
                </ol>
            </div>
        </>
    )
}

export default Block;