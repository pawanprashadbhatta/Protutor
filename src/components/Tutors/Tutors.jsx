import React from "react";
import styles from "./Tutors.module.css";

const Tutor = () => {
  // Sample teacher data
  const teachers = [
    {
      id: 1,
      name: "Pawan Pd Bhatta",
      qualification: "BSC.CSIT",
      rating: 4.5,
      fbId: "PawanPBhatta",
      instaId: "PawanBhatta",
      contact: "bhattap111@example.com",
    },
    // Add more teachers as needed
  ];

  return (
    <div className={styles.tutorContainer}>
      <h2>Meet Our Teachers</h2>
      <div className={styles.teacherList}>
        {teachers.map((teacher) => (
          <div key={teacher.id} className={styles.teacherCard}>
            <h3>{teacher.name}</h3>
            <p className={styles.qualification}>{teacher.qualification}</p>
            <div className={styles.rating}>
              <span className={styles.starIcon}>&#9733;</span>
              {teacher.rating}
            </div>
            <div className={styles.socialMedia}>
              <a
                href={`https://facebook.com/${teacher.fbId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href={`https://instagram.com/${teacher.instaId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className={styles.contact}>
              <span>Contact:</span> {teacher.contact}
            </div>
            <button className={styles.requestButton}>Request Teacher</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutor;
