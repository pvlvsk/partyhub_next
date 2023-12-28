import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import styles from "./Home.module.css";

const DynamicFooter = dynamic(
  () => import("@/components/DynamicFooter/DynamicFooter"),
  {
    ssr: false,
  }
);

export const Home = () => {
  return (
    <Layout title="Home">
      <div className={styles.main}>partyhub.ru</div>

      {/* <DynamicFooter /> */}
    </Layout>
  );
};
