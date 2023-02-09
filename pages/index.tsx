import { NextPage, GetServerSideProps } from "next";
import styles from "./index.module.scss";
import Banner from '../components/banner'
import Liangdian from '../components/liangdian'
import Agenda from '../components/agenda'
import Ticketing from '../components/ticketing'
import Vote from '../components/vote'
import Speaker from "@/components/speaker";
import Sponsor from "../components/sponsor";
import { querySponsor } from '../utils/servers'

const Home: NextPage = (props: any) => {
  return (
    <div className={styles.container}>
      <Banner></Banner>
      <Liangdian></Liangdian>
      <Agenda></Agenda>
      <Ticketing></Ticketing>
      <Vote></Vote>
      <Speaker></Speaker>
      <Sponsor></Sponsor>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const sponsorRes = await querySponsor({
      page: 1,
      limit: 10
    })
    return {
      props: { 
        res: {
          sponsorRes
        }
      }
    }
  } catch (error) {
    return {
      props: {
        error
      }
    }
  }
}

export default Home;