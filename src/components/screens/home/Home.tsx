import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(
  () => import("@/components/DynamicFooter/DynamicFooter"),
  {
    ssr: false,
  }
);

export const Home = () => {
  return (
    <Layout title="Home">
      <div>Home</div>

      <DynamicFooter />
    </Layout>
  );
};
