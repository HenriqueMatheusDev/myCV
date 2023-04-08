import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-blue pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl ">
            HENRIQUE MATEUS
          </p>
          <p className="font-playfair text-md ">
            ©2023 Todos os direitos reservados..
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
