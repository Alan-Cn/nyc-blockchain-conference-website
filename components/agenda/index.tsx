import { FC } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import agenda1 from "@/public/agenda1.jpg"
import agenda2 from "@/public/agenda2.jpg"

const Agenda: FC = ({}) => {
  return (
    <div className={styles.agendaContent}>
      <div className={styles.title}>
        AGENDA
      </div>
      <div className={styles.agendaWrap}>
        <div className={styles.leftLine}>
          <div className={styles.arc}>
            <div className={styles.arcContent}/>
          </div>
          <div className={`${styles.arc} ${styles.arcTwo}`}>
            <div className={styles.arcContent}/>
          </div>
          <div className={`${styles.arc} ${styles.arcTwo}`}>
            <div className={styles.arcContent}/>
          </div>
        </div>
        <div className={styles.nymInfoItem}>
          <div className={styles.nycInfo}>
            <span className={styles.infoTime}>2023-06-01 # BBS.NYC</span>
            <span className={styles.infoTip}>2023 WEB3.0 Leaders Summit (9am - 5pm)</span>
          </div>
          <div className={styles.nycImage}>
            <Image className={styles.agenda1} src={agenda1} alt="agenda1" />
          </div>
        </div>
        <div className={styles.nymInfoItem}>
          <div className={styles.nycInfo}>
            <span className={styles.infoTime}>2023-06-02 # BBS.NYC</span>
            <span className={styles.infoTip}>Metaverse Citizens Meeting (9am - 12am)</span>
          </div>
          <div className={styles.nycImage}>
            <Image className={styles.agenda2} src={agenda2} alt="agenda2" />
          </div>
        </div>
        <div className={styles.nymInfoItem}>
          <div className={styles.nycInfo}>
            <span className={styles.infoTime}>2023-06-02 # BBS.NYC</span>
            <span className={styles.infoTip}>Supervision, compliance, and consensus rebuild (1pm-5pm)</span>
          </div>
          <div className={styles.nycImage}>
            <Image className={styles.agenda1} src={agenda1} alt="agenda1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agenda;