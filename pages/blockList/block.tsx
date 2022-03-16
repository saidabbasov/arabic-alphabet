import React from "react";

import { block, blockList } from './blocks';
import styles from "./Block.module.scss";

const Block = () => {
    return(
        <>
        {
            block.map( (item, index) => <div className={styles.block} key={index}>
                <div className={styles.frame}>
                <div className={styles.frameLetters}>
                    <div className={styles.letterArabic}>{item.letterArabic}</div>
                    <div className={styles.letter}>{item.letter}</div>
                </div>
            </div>
            </div>)
        }
        {
            blockList.map( (itemList, index) => <div className={styles.block} key={index}>
               <ol>
                    <li><span className={styles.blockListLetters}>{itemList.blockListLetters}</span> - <span>{itemList.letterList}</span></li>
                </ol>
            </div>)
        }
        </>
    )
}

export default Block;