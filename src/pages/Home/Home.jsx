import styles from "./Home.module.css"
import icon from "../../img/iconweb.png";

const Home = () => {
  return (
    <div className={styles.containerPai}>
        <section className={styles.containerFilho}>
          <h1>Gabriel Oliveira</h1>
          <p>Olá, sou um desenvolvedor de software com experiência em diversas tecnologias para desenvolvimento web. Possuo sólidos conhecimentos em HTML, CSS e JavaScript, bem como experiência em frameworks como React para o front-end e Node.js para o back-end. Além disso, tenho habilidades em Python e MySQL para desenvolvimento de aplicações robustas. Estou comprometido em aprender continuamente e em contribuir para projetos desafiadores e inovadores. Tenho um histórico de sucesso na entrega de soluções de alta qualidade e estou entusiasmado para aplicar minhas habilidades em novos desafios de desenvolvimento de software.</p>
        </section>
        <section className={styles.containerFilho}>
          <picture>
            <img className={styles.imgIcon} src={icon} alt="IMG" />
          </picture>
        </section>
    </div>
  )
}

export default Home