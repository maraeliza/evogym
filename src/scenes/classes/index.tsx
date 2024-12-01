import { SelectedPage, ClasseType } from "../../shared/types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image4 from "../../assets/image3.png";
import image3 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";

import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Aula from "./Class";

const classes: Array<ClasseType> = [
  {
    name: "Aulas de Levantamento de Peso",
    description:
      "Aumente sua força e transforme seu corpo com as nossas aulas de treinamento de força. Nossos instrutores especializados guiarão você em cada movimento, ajudando a melhorar a sua resistência e alcançar os resultados que você sempre desejou. Prepare-se para desafiar seus limites e ver mudanças visíveis em seu físico!",
    image: image1,
  },
  {
    name: "Aulas de Yoga",
    description:
      "Relaxe e recarregue suas energias com as nossas aulas de yoga. Ideal para quem busca equilíbrio entre mente e corpo, nossas aulas oferecem uma experiência de renovação e flexibilidade. Venha melhorar sua postura, alongamento e, claro, encontrar um momento de paz em sua rotina agitada.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Fortaleça seu core e melhore a estabilidade do seu corpo com nossas aulas focadas no abdômen. Aumente sua resistência e defina a região abdominal com exercícios dinâmicos, tudo enquanto melhora sua postura e previne lesões. Uma aula essencial para quem quer sentir-se mais forte e confiante!",
    image: image3,
  },
  {
    name: "Adventure Classes",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Aulas energéticas e dinâmicas para quem busca melhorar o condicionamento físico e a saúde de maneira completa. Se você quer aumentar sua resistência, queimar calorias e ainda se divertir, as nossas aulas de fitness são perfeitas para você. Venha para se movimentar e sentir-se revigorado!",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Desenvolva seu potencial ao máximo com nossas aulas de treinamento personalizadas. Focadas no seu progresso individual, essas aulas combinam técnicas de força, resistência e flexibilidade para ajudá-lo a alcançar o seu melhor desempenho. Ideal para quem deseja resultados rápidos e duradouros!",
    image: image6,
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Nossas aulas</HText>
            <p className="py-5">
              Na nossa academia, oferecemos aulas diversificadas e
              personalizadas para todos os níveis de condicionamento físico. Com
              instrutores qualificados e um ambiente motivador, cada treino é
              uma oportunidade de evolução. Seja para ganhar força, melhorar a
              flexibilidade ou simplesmente se divertir, temos a aula perfeita
              para você. Junte-se a nós e faça parte de uma comunidade focada em
              resultados e bem-estar!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((classe: ClasseType, index) => (
              <Aula 
                key={`${classe.name}-${index}`} 
                name={classe.name}
                description={classe.description}
                image={classe.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Classes;
