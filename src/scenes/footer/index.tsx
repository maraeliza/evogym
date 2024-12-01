import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          A Evogym oferece treinos personalizados para você alcançar seus objetivos de forma eficaz e segura. Nossa missão é transformar sua vida com saúde e bem-estar.
          </p>
          <p>© Evogym Todos os Direitos Reservados</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Sobre nós</p>
          <p className="my-5">Programas de treinamento</p>
          <p>Blog e Dicas</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Entre em Contato</h4>
          <p className="my-5">Fale conosco para dúvidas, informações sobre treinos e planos de adesão.</p>
          <p>+55 (34) 99999-0000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
