import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"}>Home</Link>
      <Link href={"/car/1"}>Car/1</Link>
    </header>
  );
};

export default Header;
