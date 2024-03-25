import styles from "./Home.module.css";
import icon from "../../img/iconweb.png";

const Home = () => {
  return (
    <div className={styles.containerPai}>
      <section className={styles.containerFilho}>
        <h1>Gabriel Oliveira</h1>
        <p>Devsenvolvedor Web</p>
        <br />
        <p>
          Experiência em tecnologias para desenvolvimento web, como HTML, CSS e
          JavaScript, bem como experiência em frameworks como React para o
          front-end e Node.js para o back-end. Além disso, tenho habilidades em
          Python e MySQL.
        </p>
      </section>
      <section className={styles.containerFilhoImg}>
        <picture>
          <img className={styles.imgIcon} src={icon} alt="IMG" />
        </picture>
      </section>
    </div>
  );
};

export default Home;
