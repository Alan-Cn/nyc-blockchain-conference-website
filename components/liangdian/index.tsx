import { FC } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import liangdian from "@/public/liangdian.png"

const Liangdian: FC = ({}) => {
  return (
    <div className={styles.liangdianContent}>
      <div className={styles.title}>
        LIANGDIAN
      </div>
      <div className={styles.titleLine}/>
      <div className={styles.titleTip}>
      THE MOST SIGNIFICANT INTERNATIONAL INSTITUTIONAL WEB3 EVENT OF 2023
      </div>
      <div className={styles.liangdianInfo}>
        <div className={styles.liangdianInfoItems}>
          <div className={styles.liangdianItemsItem}>
            <div className={styles.liangdianItem}>
              <div className={styles.itemContent}>
                <div className={styles.itemIndex}>
                  1
                </div>
                <div className={styles.itemInfo}>
                How to rebuild the industry consensus after the conllapse of 3AC, LUNA, and FTX
                </div>
              </div>
              <div className={styles.itemContent}>
                <div className={styles.itemIndex}>
                  2
                </div>
                <div className={styles.itemInfo}>
                To enhance dialogues between scholars, legislators, government authorities and the core industry leaders. As to build mutual trust through private meetings and open dialogues, and also, to explore a reciprocal and applicable industry self-regulatory standards and government regulatory rules. Aimed to issue the "Blockchain Autonomy Declaration 2023" after the summit.
                </div>
              </div>
              <div className={styles.itemContent}>
                <div className={styles.itemIndex}>
                  3
                </div>
                <div className={styles.itemInfo}>
                Promote the constitution of the metaverse and establish a more orderly metaverse ecology. Promote the governance level of DAO
                </div>
              </div>
            </div>
            <div className={styles.liangdianBanner}>
              <Image className={styles.liangdianImg} src={liangdian} alt="liangdianLogo"  />
            </div>
          </div>
        </div>
        <div className={styles.liangdianInfoItem}>
          <div className={styles.itemIndex}>
            4
          </div>
          <div className={styles.liangdianInfoItemWord}>
          Establish the largest industry summit brand in New York, and provide an effective communication platform for regulators, Wall Street, academia, technologists, entrepreneurs, and cryptocurrency enthusiasts
          </div>
        </div>
      </div>
    </div>
  )
}

export default Liangdian;