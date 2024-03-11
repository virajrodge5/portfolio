import React from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Techstack from "./Techstack";

const Skills = () => {
  return (
    <div className={`md:mt-[1px] bg-black-100 rounded-[20px] margin`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[50px]`}>
        <div>
          <h2 className={`m-[-8px] ${styles.sectionSubText}`}>
            Skills and tools
          </h2>
          <h2 className={`m-[-8px] ${styles.sectionHeadText}`}>Skillset.</h2>
        </div>
      </div>
      <Techstack />
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
