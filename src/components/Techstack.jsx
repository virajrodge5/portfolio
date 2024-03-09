import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { SiExpress, SiRedux, SiFirebase, SiVisualstudiocode } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiBootstrap,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiPython,
  DiGithubBadge
} from "react-icons/di";
import { SectionWrapper } from "../hoc";

function IconWrapper({ children }) {
  return (
    <div className="flex justify-center items-center bg-primary text-5xl px-9 py-9 md:px-14 md:py-8 rounded-md font-extrabold md:text-6xl opacity-93 border-2 border-purple-300 hover:transform hover:scale-105 transition duration-400 ease-in-out" style={{boxShadow: '5px 5px 0px 0px rgba(200, 137, 230, 0.437)'}}>
      {children}
    </div>
  );
}

function Techstack() {
  return (
    <div className="container mx-auto py-[1px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <IconWrapper>
          <CgCPlusPlus />
        </IconWrapper>
        <IconWrapper>
          <DiJavascript1 />
        </IconWrapper>
        <IconWrapper>
          <DiReact />
        </IconWrapper>
        <IconWrapper>
          <DiHtml5 />
        </IconWrapper>
        <IconWrapper>
          <DiCss3 />
        </IconWrapper>
        <IconWrapper>
          <DiNodejs />
        </IconWrapper>
        <IconWrapper>
          <SiExpress />
        </IconWrapper>
        <IconWrapper>
          <DiMongodb />
        </IconWrapper>
        <IconWrapper>
          <SiRedux />
        </IconWrapper>
        <IconWrapper>
          <DiBootstrap />
        </IconWrapper>
        <IconWrapper>
          <DiMysql />
        </IconWrapper>
        <IconWrapper>
          <DiPython />
        </IconWrapper>
        <IconWrapper>
          <SiFirebase size={45}/>
        </IconWrapper>
        <IconWrapper>
          <DiGithubBadge />
        </IconWrapper>
        <IconWrapper>
          <SiVisualstudiocode size={40}/>
        </IconWrapper>
      </div>
    </div>
  );
}

export default SectionWrapper(Techstack, "");
