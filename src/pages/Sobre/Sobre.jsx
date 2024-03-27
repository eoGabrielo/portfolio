import styles from "./Sobre.module.css";
import Cardtecs from "../../components/CardTecs/CardTecs";
//ICONES SITE -> https://www.flaticon.com/
//Icon tecs
import reacticon from "../../img/reacticon.png";
import jsicon from "../../img/jsicon.png";
import iconhtml from "../../img/iconhtml.png";
import iconcss from "../../img/iconcss.png";
import iconpy from "../../img/iconpy.png";
import iconmysql from "../../img/iconmysql.png";

const Sobre = () => {
  return (
    <div className={styles.containerSobre}>
      <h1>Sobre mim</h1>
      <p>
      Com 23 anos de idade e atualmente cursando o último semestre de Análise de Sistemas, minha jornada de estudos e experiência em tecnologias para desenvolvimento web, incluindo HTML, CSS e JavaScript, bem como frameworks como React para o front-end e Node.js para o back-end. Além disso, domino habilidades em Python e MySQL, contribuindo para a construção de soluções robustas e eficientes.
      </p>
      <h1>Tecnologias</h1>
      <section className={styles.containerCards}>
        <Cardtecs img={reacticon} name="React" />
        <Cardtecs img={jsicon} name="JavaScript" />
        <Cardtecs img={iconhtml} name="HTML" />
        <Cardtecs img={iconcss} name="CSS" />
        <Cardtecs img={iconpy} name="Python" />
        <Cardtecs img={iconmysql} name="MySQL" />
      </section>
    </div>
  );
};

export default Sobre;
