import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      occupation: "Web Developer",
      testimonial:
        "I have learned so much through the courses on this platform. The instructors are knowledgeable and the content is well-structured. Highly recommended!",
    },
    {
      id: 2,
      name: "Jane Smith",
      occupation: "Graphic Designer",
      testimonial:
        "The variety of courses available here is amazing. It has helped me enhance my design skills and explore new techniques. I'm really happy with the learning experience!",
    },
    {
      id: 3,
      name: "Mike Johnson",
      occupation: "Business Professional",
      testimonial:
        "I have taken multiple business courses on this platform and it has been incredibly helpful for my career growth. The quality of instruction is top-notch!",
    },
  ];

  return (
    <div className={styles.Testimonials}>
      <h2>What Our Students Say</h2>
      <div className={styles.TestimonialList}>
        {testimonials.map((testimonial) => (
          <div className={styles.Testimonial} key={testimonial.id}>
            <p className={styles.Content}>{testimonial.testimonial}</p>
            <div className={styles.Author}>
              <h4>{testimonial.name}</h4>
              <p>{testimonial.occupation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
