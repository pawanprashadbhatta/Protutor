import React from "react";
import styles from "./FeaturedCourses.module.css";

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development 101",
      instructor: "John Smith",
      thumbnail: "/images/bg/wow.jpg",
    },
    {
      id: 2,
      title: "Graphic Design Fundamentals",
      instructor: "Jane Doe",
      thumbnail: "/images/bg/wow2.jpg",
    },
    {
      id: 3,
      title: "Business Analytics Masterclass",
      instructor: "Mike Johnson",
      thumbnail: "/images/bg/wow3.jpg",
    },
  ];

  return (
    <section className={styles.FeaturedCourses}>
      <h2>Featured Courses</h2>
      <div className={styles.CourseList}>
        {courses.map((course) => (
          <div className={styles.Course} key={course.id}>
            <img src={course.thumbnail} alt={course.title} />
            <div className={styles.CourseDetails}>
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
              <a href={`/course/${course.id}`} className={styles.EnrollButton}>
                Enroll Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
