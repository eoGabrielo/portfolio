import styles from "./CardTecs.module.css";

const CardTecs = ({ img, name }) => {
  return (
    <div className={styles.containerCard}>
      <p className={styles.tituloTec}>{name}</p>
      <picture>
        <img src={img} alt="imgicon" />
      </picture>
    </div>
  );
};

export default CardTecs;
