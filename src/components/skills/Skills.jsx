import { SectionTitle } from "../SectionTitle";
import SkillComponent from "./SkillComponent";

import code from "../../assets/programming_languages.svg";
import framework_svg from "../../assets/frameworks.svg";
import database_svg from "../../assets/database.svg";
import tool_svg from "../../assets/tools.svg";

import java from "../../assets/skills/languages/java.svg";
import python from "../../assets/skills/languages/python.svg";
import js from "../../assets/skills/languages/js.svg";
import cpp from "../../assets/skills/languages/cpp.svg";

import sb from "../../assets/skills/frameworks/spring-boot.svg";
import hibernate from "../../assets/skills/frameworks/hibernate.svg";
import node from "../../assets/skills/frameworks/nodejs.svg";
import react from "../../assets/skills/frameworks/react.svg";
import ex from "../../assets/skills/frameworks/expressjs.svg";

import mysql from "../../assets/skills/db/mysql.svg";
import mongo from "../../assets/skills/db/mongodb.svg";
import pg from "../../assets/skills/db/postgresql.svg";
import fb from "../../assets/skills/db/firebase.svg";

import aws from "../../assets/skills/tools/aws.svg";
import curl from "../../assets/skills/tools/curl.svg";
import daisyui from "../../assets/skills/tools/daisyui.svg";
import docker from "../../assets/skills/tools/docker.svg";
import git from "../../assets/skills/tools/git.svg";
import github from "../../assets/skills/tools/github.svg";
import linux from "../../assets/skills/tools/linux.svg";
import tailwindcss from "../../assets/skills/tools/tailwindcss.svg";

export default function Skills() {
  const pl = [
    { name: "Java", icon: java },
    { name: "Python", icon: python },
    { name: "JavaScript", icon: js },
    { name: "C++", icon: cpp },
  ];

  const fw = [
    { name: "Spring Boot", icon: sb },
    { name: "Hibernate", icon: hibernate },
    { name: "Node.js", icon: node },
    { name: "React", icon: react },
    { name: "Express.js", icon: ex },
  ];

  const db = [
    { name: "MySQL", icon: mysql },
    { name: "MongoDB", icon: mongo },
    { name: "PostgreSQL", icon: pg },
    { name: "Firestore", icon: fb },
  ];

  const tp = [
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "Docker", icon: docker },
    { name: "Linux", icon: linux },
    { name: "AWS", icon: aws },
    { name: "Firebase", icon: fb },
    { name: "tailwindcss", icon: tailwindcss },
    { name: "daisyUI", icon: daisyui },
    { name: "cURL", icon: curl },
  ];

  return (
    <div className="">
      <SectionTitle text={"My Skills"} />
      <div className="mx-auto max-w-screen-lg du-tabs du-tabs-lift m-24">
        <label className="du-tab">
          <input type="radio" name="my_tabs_4" />
          <img src={code} alt="" className="size-4 mx-3" />
          Programming Languages
        </label>
        <div className="du-tab-content bg-base-100 border-base-300 p-6">
          <SkillComponent skills={pl} />
        </div>

        <label className="du-tab">
          <input type="radio" name="my_tabs_4" defaultChecked />
          <img src={framework_svg} alt="" className="size-4 mx-3" />
          Frameworks & Libraries
        </label>
        <div className="du-tab-content bg-base-100 border-base-300 p-6">
          <SkillComponent skills={fw} />
        </div>

        <label className="du-tab">
          <input type="radio" name="my_tabs_4" />
          <img src={database_svg} alt="" className="size-4 mx-3" />
          Databases
        </label>
        <div className="du-tab-content bg-base-100 border-base-300 p-6">
          <SkillComponent skills={db} />
        </div>

        <label className="du-tab">
          <input type="radio" name="my_tabs_4" />
          <img src={tool_svg} alt="" className="size-4 mx-3" />
          Tools & Platforms
        </label>
        <div className="du-tab-content bg-base-100 border-base-300 p-6">
          <SkillComponent skills={tp} />
        </div>
      </div>
    </div>
  );
}
