import { FC, PropsWithChildren } from "react";
import Header from "./Header/Header";
import Meta from "../seo/Meta";

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title = "no title",
}) => {
  return (
    <div className="">
      <Meta title={title}>
        <Header />
        {children}
      </Meta>
    </div>
  );
};

export default Layout;
