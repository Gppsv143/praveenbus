import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className="logo">
      <img src="/images/logo.png" alt="PraveenBus" />
    </div>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/buses">Buses</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
    </nav>
  </header>
);

export default Header;
