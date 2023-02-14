import { FC } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import binance from "@/public/binance.png"
import meta_mask from "@/public/meta_mask.png"
import trust from "@/public/trust.png"
import token_pocket from "@/public/token_pocket.png"
import right_allow from "@/public/rightAllow.png"
import sponsors1 from "@/public/sponsor1.png"
import sponsors2 from "@/public/sponsor2.svg"
import sponsors3 from "@/public/sponsor3.svg"
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
        <div key="sponsors1" className={styles.sponsorItem}>
              <Image className={styles.itemImg} alt="itemImg" style={{width:"300px",height:"207px"}} src={sponsors1}></Image>
            </div>
            <div key="sponsors2" className={styles.sponsorItem}>
              <Image className={styles.itemImg} alt="itemImg" style={{width:"300px",height:"286px"}} src={sponsors2}></Image>
            </div>
            <div key="sponsors3" className={styles.sponsorItem}>
              <Image className={styles.itemImg} alt="itemImg" style={{width:"300px",height:"272px"}} src={sponsors3}></Image>
            </div>
        </div>
    </div>
  )
}

export default Sponsor;