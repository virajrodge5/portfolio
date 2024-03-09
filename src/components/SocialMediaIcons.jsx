import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-4 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/virajrodge/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={35}/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://twitter.com/rodge_viraj"
          target="_blank"
          rel="noreferrer"
        >
          <SiX size={35}/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/virajrodge/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={35}/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/virajrodge5"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={35}/>
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;