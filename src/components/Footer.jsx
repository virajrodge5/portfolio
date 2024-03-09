import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-25 bg-primary pt-5 pb-10">
      <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
        <SocialMediaIcons />
        <div className="text-center">
            <p className="font-playfair font-semibold text-2xl text-white">
              VIRAJ RODGE
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;