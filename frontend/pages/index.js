import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Image
          src="/images/praveenbus-logo.PNG"
          alt="PraveenBus Logo"
          width={200}
          height={200}
        />
      </div>

      <h1>Welcome to PraveenBus</h1>
      <p>Your one-stop solution for bus ticket bookings.</p>

      <div className={styles.buttonGroup}>
        <h2>User</h2>
        <Link href="/user-login">
          <button className={styles.loginButton}>User Login</button>
        </Link>
        <Link href="/user-signup">
          <button className={styles.loginButton}>User Signup</button>
        </Link>

        <h2>Operator</h2>
        <Link href="/operator-login">
          <button className={styles.loginButton}>Operator Login</button>
        </Link>
        <Link href="/operator-signup">
          <button className={styles.loginButton}>Operator Signup</button>
        </Link>
      </div>
    </div>
  );
}

