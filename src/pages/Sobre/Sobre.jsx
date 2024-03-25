import styles from "./Sobre.module.css";
import Cardtecs from "../../components/CardTecs/CardTecs";
//ICONES SITE -> https://www.flaticon.com/
//Icon tecs
import reacticon from "../../img/reacticon.png";
import jsicon from "../../img/jsicon.png";

const Sobre = () => {
  return (
    <div className={styles.containerSobre}>
      <h1>Sobre mim</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, error
        natus ab corporis adipisci placeat, nam laborum commodi sit est sed qui
        porro aliquam, quisquam sunt laudantium sapiente nisi amet dolorem.
        Minus soluta asperiores, ipsum corrupti eligendi eveniet inventore
        cupiditate explicabo natus corporis possimus commodi. Nesciunt
        laboriosam modi, provident, eos commodi maxime repellat distinctio sint
        assumenda a sunt earum alias dicta incidunt itaque sequi. Voluptate
        laudantium voluptates cumque enim tempora, blanditiis dolorem error unde
        totam porro distinctio modi rerum, voluptatem iusto consectetur quidem.
        Quia sequi rem voluptatibus est, ducimus placeat saepe pariatur ea,
        ratione quibusdam dolores? Reprehenderit eligendi quae ipsam sint
        molestiae soluta delectus itaque quam mollitia doloremque. Quos facere,
        quam eaque ullam velit vel qui aperiam vitae ipsum voluptas numquam
        necessitatibus, tenetur consectetur dicta, officia voluptatem
        consequatur. Nulla alias temporibus ullam explicabo quibusdam excepturi
        quisquam esse eaque nostrum, nam vel maiores nobis facere vero, optio
        omnis facilis nesciunt harum, quidem ducimus minus quis cum rerum iusto?
        Totam libero corrupti esse adipisci doloremque minus recusandae
        accusantium repellendus, voluptatem iusto! Sequi quos impedit voluptates
        quae harum temporibus voluptas, veritatis vel distinctio rerum ducimus
        eaque labore debitis delectus sapiente vero quam mollitia corporis
        repellat eligendi velit natus. Expedita reiciendis in at, provident enim
        itaque atque saepe! Exercitationem quasi natus asperiores accusamus cum
        beatae in, veniam adipisci cumque, rerum enim quidem praesentium illo
        labore eius doloremque aspernatur odio. Sit possimus suscipit impedit
        qui, harum aperiam velit soluta quia nihil deleniti ratione animi
        quibusdam id laborum ad odio sunt consectetur fugit cum explicabo libero
        labore doloribus hic. Unde fuga nostrum, inventore porro consectetur
        veritatis commodi excepturi placeat! Temporibus, incidunt qui sequi
        magnam deleniti laudantium iure voluptatum consectetur expedita eius?
        Autem laboriosam atque modi velit, culpa est illum quo laudantium quos?
        Ad, assumenda! Vitae a provident error, atque sequi iusto tenetur
        numquam ipsa molestias obcaecati.
      </p>
      <h1>Tecnologias</h1>
      <section className={styles.containerCards}>
        <Cardtecs img={reacticon} name="React" />
        <Cardtecs img={jsicon} name="JavaScript" />
        <Cardtecs img={reacticon} name="HTML" />
        <Cardtecs img={reacticon} name="CSS" />
        <Cardtecs img={reacticon} name="Python" />
        <Cardtecs img={reacticon} name="MySQL" />
      </section>
    </div>
  );
};

export default Sobre;
