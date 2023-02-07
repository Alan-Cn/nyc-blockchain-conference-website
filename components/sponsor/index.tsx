import { FC } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import binance from "@/public/binance.png"
import meta_mask from "@/public/meta_mask.png"
import trust from "@/public/trust.png"
import token_pocket from "@/public/token_pocket.png"
import right_allow from "@/public/rightAllow.png"
import Link from 'next/link'

const SPONSOR_LIST = [
  binance, meta_mask, trust, token_pocket,
  binance, meta_mask, trust, token_pocket,
  binance, meta_mask, trust, token_pocket,
  binance, meta_mask, trust, token_pocket,
  binance, meta_mask, trust, token_pocket,
  binance, meta_mask, trust, token_pocket,
]
const Sponsor: FC = ({}) => {
  return (
    <div className={styles.sponsorContent}>
      <div className={styles.head}>
        <div className={styles.title}>
          SPONSOR
        </div>
        <div className={styles.apply}>
            <Link href='/sponsors'>
              APPLY
            </Link>
          <Image src={right_allow} className={styles.rightAllow} alt="right_allow"></Image>
        </div>
      </div>
        <div className={styles.sponsorWrap}>
          {SPONSOR_LIST.map((item, index) => {
            return <div key={index} className={styles.sponsorItem}>
              <Image className={styles.itemImg} alt="itemImg" src={item}></Image>
            </div>
          })}
        </div>
    </div>
  )
}

export default Sponsor;