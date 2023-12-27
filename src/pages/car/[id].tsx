import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import { useRouter } from "next/router";

const CarPage: NextPage = () => {
  const { push, replace } = useRouter();

  return (
    <Layout title="Car">
      <div>
        <button
          onClick={() => {
            push("/");
          }}
        >
          home
        </button>
        <button
          onClick={() => {
            replace("/");
          }}
        >
          home
        </button>
      </div>
    </Layout>
  );
};

export default CarPage;
