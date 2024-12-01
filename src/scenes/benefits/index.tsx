import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Instalações de Última Geração",
    description:
      "Ambientes modernos e totalmente equipados para oferecer o melhor em conforto e tecnologia, garantindo uma experiência de treino única e eficiente.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Centenas de Aulas Diversificadas",
    description:
      "Oferecemos uma variedade de aulas para todos os níveis e objetivos, desde yoga e pilates até treinos intensivos. Aqui você encontra a modalidade ideal para o seu estilo de vida.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Treinadores Especializados",
    description:
      "Nossa equipe de profissionais qualificados está pronta para guiar você com segurança, oferecer dicas personalizadas e maximizar seus resultados de forma inteligente e eficaz.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Benefits);
        }}
      >
        {/* HEADER*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MAIS DO QUE SÓ UMA ACADEMIA</HText>
          <p className="md:my-5 text-sm ">
            Oferecemos equipamentos de fitness de classe mundial, treinadores
            experientes e aulas para levar você aos seus objetivos de
            condicionamento físico com facilidade. Cuidamos verdadeiramente de
            cada um de nossos membros.
          </p>
        </motion.div>

        {/* BENEFICIOS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex items-center justify-between gap-8 mt-5"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/** IMAGEM E DESCRICAO*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/** IMAGEM */}
          <img
            className="mx-auto "
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/** DESCRICAO */}
          <div>
            {/** TITULO */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Milhões de membros felizes {"  "}
                    <span className="text-primary-500"> ficando em forma</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/** DESCRICAO */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 ">
                Milhões de membros felizes já estão ficando em forma com a nossa
                academia! Aqui, você encontra equipamentos de ponta, ambiente
                motivador e uma equipe dedicada a transformar seu treino em
                resultados reais.
              </p>
              <p className="mb-5 ">
                Oferecemos aulas diversificadas, desde treinos intensos a
                práticas relaxantes, tudo pensado para atender diferentes
                objetivos. Com o suporte de treinadores especializados, você vai
                se sentir inspirado a alcançar sua melhor versão, enquanto se
                conecta com uma comunidade que vibra por saúde e bem-estar.
              </p>
            </motion.div>
            {/** BOTAO */}
            <div className="mt-16">
              <ActionButton setSelectedPage={setSelectedPage}>
                Se inscreva agora!
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
