import { FC } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import liangdian from "@/public/liangdian.png"

const Liangdian: FC = ({}) => {
  return (
    <div className={styles.liangdianContent}>
      <div className={styles.title}>
        What is BBS.NYC
      </div>
      <div className={styles.titleLine}/>
      <div className={styles.titleTip}>
      Retrospect | Regulate | Reshape | Rebuild
      </div>
      <div className={styles.liangdianInfo}>
        <div className={styles.liangdianInfoItems}>
          <div className={styles.liangdianItemsItem}>
            <div className={styles.liangdianItem}>
              <div className={styles.itemContent}>
                <div className={styles.itemInfo}>
                BBS.NYC is the top summit in the blockchain field. It is co-sponsored by top universities in the United States, governments of Caribbean countries, and well-known Wall Street investors! Every year, more than two theme events and more than 20 online forums are held around the world.
                </div>
              </div>
              <div className={styles.itemContent}>
                <div className={styles.itemInfo}>
                BBS.NYC focuses on policy trends, technological innovation, and technological applications in the blockchain field, provides practitioners with a world-class platform for political and business exchanges, and contributes to the advancement of science and technology! BBS.NYC also pays attention to global climate change, multiculturalism, equality and freedom, love and peace!
                </div>
              </div>
            </div>
            <div className={styles.liangdianBanner}>
              <Image className={styles.liangdianImg} src={liangdian} alt="liangdianLogo"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Liangdian;