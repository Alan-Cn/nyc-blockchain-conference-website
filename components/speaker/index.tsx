import { FC } from "react";
import styles from "./styles.module.scss"
import Image from "next/image";
import rightArrow from "@/public/rightAllow.png";
import speaker from "@/public/speaker.png";
import Link from 'next/link'

const ALLSPEAKERS=[
    {
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    },{
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    }
    ,{
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    },
    {
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    },{
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    },{
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    },{
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    },{
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    }
]
const Speaker = () => {
  return(
    <div className={styles.speaker}>
      <div className={styles.head}>
        <div className={styles.title}>
          SPEAKER
        </div>
        <div className={styles.apply}>
          <Link href='/speaker'>
            APPLY
          </Link>
          <Image src={rightArrow} className={styles.rightAllow} alt="right_allow"></Image>
        </div>
      </div>
      <ul className={styles.allspeaker}>
        {
          ALLSPEAKERS.map((item,index)=>{
            return <li key={index} className={styles.speakersLi}>
              <Image src={item.url} alt={item.name+index} className={styles.speakerImg}></Image>
              <span>{item.name}</span>
              <p>{item.postion}</p >
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Speaker;