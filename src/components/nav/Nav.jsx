
import { FaSearch } from "react-icons/fa";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <>
      <nav className={`${styles.Nav} container`}>
        <div className={styles.logo}>
          <img src="/images/logo/n.png" alt="logo of protuotr" />
        </div>
        <div className={styles.search}>
          <input className={styles.input} type="text" placeholder="Search" />
          <FaSearch className={styles.searchIcon} />
        </div>

        <ul>
          <li href="#">Home</li>
          <li href=" #">Tutors</li>
          <li href="#">About us</li>
          <li href="#">Contact</li>
        </ul>
        
        <div className={styles.btn}>
          <button>Login/Signup</button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
