import { NextPage } from "next";
import styles from "./index.module.scss";
import Vote from '../../components/vote'

const Speaker: NextPage = () => {
  return (
    <div className={styles.container}>
      <Vote></Vote>
    </div>
  );
};

export default Speaker;