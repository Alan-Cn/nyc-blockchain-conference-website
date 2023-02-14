import { FC } from "react";
import styles from "./styles.module.scss"
import Image from "next/image";
import rightArrow from "@/public/rightAllow.png";
import speaker from "@/public/speaker.png";
import Link from 'next/link'

const ALLSPEAKERS=[
    {
        url:speaker,
        name:"George Soros",
        postion:"Chair of Soros Fund Management LLC"
    },{
        url:speaker,
        name:"Roosevelt Skerrit",
        postion:"Prime Minister of Dominica"
    }
    ,{
        url:speaker,
        name:"Dickon Mitchell",
        postion:"Prime Minister of Grenada"
    },
    {
        url:speaker,
        name:"Philip Pierre",
        postion:"Prime Minister of St.Lucia"
    },{
        url:speaker,
        name:"Eric Adams",
        postion:"Mayor of New York"
    },{
        url:speaker,
        name:"Vitalik Buterin",
        postion:"Founder of ETH Foundation"
    },{
        url:speaker,
        name:"CZ",
        postion:"Binance CEO"
    },{
        url:speaker,
        name:"Brian Armstrong",
        postion:"CEO of Coinbase"
    },{
      url:speaker,
      name:"Justin Sun",
      postion:"Founder of TRON"
  },{
    url:speaker,
    name:"Star Xu",
    postion:"CEO of OKX"
},{
  url:speaker,
  name:"Barry Silbert",
  postion:"Founder of Grayscale"
},{
  url:speaker,
  name:"Cathie Wood",
  postion:"Founder of Ark Invest"
},{
  url:speaker,
  name:"Ray Dalio",
  postion:"Founder of Bridgewater Associates"
},{
  url:speaker,
  name:"Wensheng Cai",
  postion:"Chairman of Meitu"
},{
  url:speaker,
  name:"Feng Xiao",
  postion:"Wanxiang Blockchai"
},{
  url:speaker,
  name:"Discus Fish",
  postion:"Cobo Co-founder"
},{
  url:speaker,
  name:"John F. Manning",
  postion:"Harvard Law School"
},{
  url:speaker,
  name:"Erwin Chemerinsky",
  postion:"Dean of UC Berkeley School of Law"
},{
  url:speaker,
  name:"Gillian Lester",
  postion:"Dean of Columbia Law School"
},{
  url:speaker,
  name:"CHAO MA",
  postion:"Chairman of Realord Group"
},{
  url:speaker,
  name:"JACK Kong",
  postion:"Founder of Nano Labs"
},{
  url:speaker,
  name:"Jack Yi",
  postion:"Founder of LD Capital"
},{
  url:speaker,
  name:"Feng Wang",
  postion:"Founder of Linekong"
},{
  url:speaker,
  name:"Jun Du",
  postion:"CEO of New Huo Tech"
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