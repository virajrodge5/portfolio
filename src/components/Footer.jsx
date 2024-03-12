import SocialMediaIcons from "./SocialMediaIcons";

import { styles } from "../styles";

const Footer = () => {
  return (
    <footer className="h-25 bg-primary pt-5 pb-10">
      <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
        <SocialMediaIcons />
        <div className="text-center">
          <p className={`${styles.sectionSubText}`}>
            MADE BY{"   "}
            <span className="text-2xl font-playfair font-semibold md:text-3xl text-white">
                VIRAJ RODGE
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
