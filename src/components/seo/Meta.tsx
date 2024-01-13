import Head from "next/head";
import { FC, PropsWithChildren } from "react";

const Meta: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>PartyHub | Агрегатор ивентов</title>
      </Head>
      {children}
    </>
  );
};

export default Meta;
