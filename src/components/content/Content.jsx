import styles from "./Content.module.css";

const Content = () => {
  return (
    <>
      <div className={`${styles.Content} container`}>
        <div className={`${styles.Ramayan} ramayan`}>
          <h1>Aim of ProTutor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dicta eveniet  doluptatem assumenda? Iste ullam, reiciendis non, magnam eligendi minima exo. Veritatis consequatur aliquam maiores repudiandae sed perspiciatis possimus dicta st laborum libero assumenda magni doloribus quos quidem quis nesciunt! Incidunt culpa fuga distinctio. Eligendi doloremque, minus iste explicabo quasi aliquam qui magni quos voluptatem dignissimos maiores aspernatur, exercitationem placeat! Ad saepe numquam sequi, nemo laboriosam fuga! Quisquam, nihil voluptas culpa earum laudantium facilis ea quas possimus dolorem aliquid eos nesciunt alias rerum molestiae animi deserunt? Atque facere dicta nemo omnis deserunt, veritatis ut repellendus temporibus asperiores, debitis quam consectetur animi est, sequi iusto rem accusantium architecto! Consequatur, ipsum aut ullam iure aperiam similique dignissimos eius nam harum ducimus neque doloremque temporibus expedita sit nemo quidem et dicta facilis debitis? Reprehenderit esse, cupiditate sed praesentium ut dicta eligendi dolorum obcaecati repellat perferendis nisi. Iste laboriosam fugit eius veniam et repudiandae? Eius iure ullam quibusdam praesentium qui illo soluta perferendis suscipit quisquam iusto temporibus culpa explicabo quia quod delectus, beatae sint expedita ipsam vero non laboriosam! Fugit est quasi sed expedita deleniti voluptatibus odit! Fuga eos culpa impedit repudiandae ducimus itaque a dolore et quisquam! Autem, dicta excepturi. Laborum officia similique, illo, repellendus consectetur illum perferendis suscipit maiores consequuntur est asperiores optio quo distinctio praesentium aperiam labore inventore quod accusamus voluptas doloremque ab eius assumenda. Quisquam id excepturi quidem repellendus aperiam deserunt consequuntur, saepe similique esse officiis enim eius ipsa voluptatum quam dicta. Aliquam, quae sunt. Ex sit tempore in. Sapiente, inventore! Optio dolor enim veritatis placeat consectetur repellendus cumque, officiis saepe cum perferendis fugiat, quis labore eius, dolorum laborum temporibus possimus eveniet ut deserunt hic recusandae quidem. Sed consequuntur ipsa est repellendus saepe maiores repellat ipsum, dolorum amet, accusantium sequi sit facere consequatur. Dolorem ullam possimus amet, pariatur reprehenderit quaerat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor harum inventore, fuga
            magnam quaerat illum ab culpa maxime quae ducimus aliquid unde explicabo vel modi vero
            ipsum laborum accusantium eum.
          </p>
          <button className={styles.ReadMoreButton}>Read More</button>
        </div>
        <div className={`${styles.Image} image`}>
          <img src="./images/bg/wow.jpg" alt="awesome" />
        </div>
      </div>
    </>
  );
};

export default Content;
