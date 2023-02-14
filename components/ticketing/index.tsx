import { FC } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import agenda2 from "@/public/agenda2.jpg"
import logo from "@/public/logo.png"

const TICKET_LIST = [
  {
    title: 'VIP ticket',
    total: '$3,800',
    infoPart: 'Early bird: $2,600',
    infoPartTwo: 'VIP zone + VIP badge + tea break in VIP lounge and much more',
  },
  {
    title: 'Guest Ticket',
    total: '$800',
    infoPart: 'Early bird: $599',
    infoPartTwo: 'Two days of content, networking and experiences',
  },
  {
    title: 'Student Pass',
    total: '$399',
    infoPart: 'Early bird: $299',
    infoPartTwo: 'Complete the application form with a valid proof of enrollment. Approved students will receive a promotional link via email. Same benefits as the Guest Ticket.',
  },
]
const Ticketing: FC = ({}) => {
  return (
    <div className={styles.ticketing}>
      <div className={styles.title}>
        TICKETING
      </div>
      <div className={styles.ticketWarp}>
        {TICKET_LIST.map((item, index) => {
          return <div key={index} className={styles.ticketItem}>
          <div className={styles.itemHead}>
            <Image className={styles.headIcon} src={logo} alt="logo"/>
            <div className={styles.headTitle}>
              {item.title}
            </div>
            <div className={styles.blackCircle}/>
            <div className={styles.blackCircleTwo}/>
          </div>
          <div className={styles.itemInfo}>
            <div className={styles.total}>
              {item.total}
            </div>
            <div className={styles.infoPart}>
              {item.infoPart}
            </div>
            <div className={styles.infoPartTwo}>
              {item.infoPartTwo}
            </div>
          </div>
          <div className={styles.itemFoot}>
            <div className={styles.footButton}>
              PURCHASE PASS
            </div>
            <div className={styles.footButton}>
              PURCHASE WITH CRYPTO
            </div>
          </div>
        </div>
        })}
      </div>
    </div>
  )
}

export default Ticketing;