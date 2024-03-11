import { motion } from "framer-motion";
import SocialMediaIcons from "./SocialMediaIcons";

import { styles } from "../styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import img from "../assets/img.png";

const Hero = () => {
  return (
    <>
      <section
        className={`relative w-full h-screen mx-auto md:mb-[-80px] mb-[-140px]`}
      >
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="hidden md:flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-80 violet-gradient" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-white text-center sm:text-left`}
            >
              Hi, I'm <span className="text-[#915EFF]">Viraj</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 text-center sm:text-left`}
            >
              I am a 3rd year ECE student <br className="sm:block hidden" />
              at IIT Bhubaneswar
            </p>

            <motion.div
              className="flex mt-5 justify-center md:justify-start mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <AnchorLink
                className="bg-[#915EFF] hover:text-white text-black py-3 px-7 font-semibold
               transition duration-500 whitespace-nowrap"
                href="#contact"
              >
                Let's Talk
              </AnchorLink>

              <a
                className="rounded-r-sm bg-[#915EFF] py-0.5 pr-0.5"
                href="https://drive.google.com/file/d/1hsWtulrRM1htBPTC6PVCZCn8J-1D3YHt/view?usp=sharing"
                target="_blank"
              >
                <div className="bg-primary font-semibold hover:text-[#915EFF] transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                  Resume
                </div>
              </a>
            </motion.div>

            <motion.div
              className="flex mt-1 justify-center md:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <SocialMediaIcons />
            </motion.div>
          </div>
          <div className="hidden md:flex md:items-center mx-14">
            <img src={img} alt="Coding-guy" />
          </div>
        </div>
      </section>
      <div className="md:hidden flex justify-center mx-auto mt-[-450px] items-center">
        <img className="w-85" src={img} alt="Coding-guy" />
      </div>
    </>
  );
};

export default Hero;
