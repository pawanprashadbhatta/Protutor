import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <div className={styles.Section}>
          <h3>About Us</h3>
          <p>
            We are a leading education and skill provider platform dedicated to empowering students
            and professionals to achieve their learning goals and enhance their skills.
          </p>
        </div>
        <div className={styles.Section}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Tutors</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.Section}>
          <h3>Contact Us</h3>
          <p> Bharatpur balkhu, City</p>
          <p>Email: info@protutor.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className={styles.BottomBar}>
        <p>&copy; {new Date().getFullYear()} Education Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
