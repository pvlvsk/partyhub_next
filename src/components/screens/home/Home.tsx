import Layout from "@/components/layout/Layout";
import styles from "./Home.module.css";
import ParallaxDesc from "@/components/Parallax/ParallaxDesc";
import ParallaxMobile from "@/components/Parallax/ParallaxMobile";

export const Home = () => {
  return (
    <Layout title="Home">
      {/* <div className={styles.main}>partyhub.ru</div> */}
      <div className={styles.desc}>
        <ParallaxDesc />
      </div>
      <div className={styles.mobile}>
        <ParallaxMobile />
      </div>
      <div className={styles.container}>
        <div className={styles.field}>
          <div className={styles.mouse}></div>
        </div>
      </div>
    </Layout>
  );
};
