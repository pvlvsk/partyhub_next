import Head from "next/head";
import { FC, PropsWithChildren } from "react";

const Meta: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title} | My Site Name</title>
      </Head>
      {children}
    </>
  );
};

export default Meta;
