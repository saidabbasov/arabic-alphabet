import React from "react";

import { block, blockList } from './blocks';
import styles from "./Block.module.scss";

const Block = () => {
    return(
        <div>
            <div className={styles.block}>
        {
            block.map( (item, index) => <div key={index}>
                <div className={styles.frame}>
                <div className={styles.frameLetters}>
                    <div className={styles.letterArabic}>{item.letterArabic}</div>
                    <div className={styles.letter}>{item.letter}</div>
                </div>
            </div>
            </div>)
        }
        </div>
        <ol className={styles.blockList}>
        {
            blockList.map( (itemList, index) => <div key={index}>
                    <li><span className={styles.blockListLetters}>{itemList.blockListLetters}</span> - <span>{itemList.letterList}</span></li>
            </div>)
        }
        </ol>
        </div>
    )
}

export default Block;