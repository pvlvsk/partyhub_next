import Layout from "@/components/layout/Layout";
import Image from "next/image";

const NotFound = () => {
  return (
    <div>
      <Layout title="Not Found">
        <Image src="/404.png" alt="" width={200} height={400}/>
      </Layout>
    </div>
  );
};

export default NotFound;
