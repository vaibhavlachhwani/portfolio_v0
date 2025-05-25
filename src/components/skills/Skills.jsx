import { SectionTitle } from "../SectionTitle";
import SkillComponent from "./SkillComponent";

import code from "../../assets/images/skills/tab_icons/programming_languages.svg";
import framework_svg from "../../assets/images/skills/tab_icons/frameworks.svg";
import database_svg from "../../assets/images/skills/tab_icons/database.svg";
import tool_svg from "../../assets/images/skills/tab_icons/tools.svg";

import java from "../../assets/images/skills/languages/java.svg";
import python from "../../assets/images/skills/languages/python.svg";
import js from "../../assets/images/skills/languages/js.svg";
import cpp from "../../assets/images/skills/languages/cpp.svg";

import sb from "../../assets/images/skills/frameworks/spring-boot.svg";
import hibernate from "../../assets/images/skills/frameworks/hibernate.svg";
import node from "../../assets/images/skills/frameworks/nodejs.svg";
import react from "../../assets/images/skills/frameworks/react.svg";
import ex from "../../assets/images/skills/frameworks/expressjs.svg";

import mysql from "../../assets/images/skills/db/mysql.svg";
import mongo from "../../assets/images/skills/db/mongodb.svg";
import pg from "../../assets/images/skills/db/postgresql.svg";
import fb from "../../assets/images/skills/db/firebase.svg";

import aws from "../../assets/images/skills/tools/aws.svg";
import curl from "../../assets/images/skills/tools/curl.svg";
import daisyui from "../../assets/images/skills/tools/daisyui.svg";
import docker from "../../assets/images/skills/tools/docker.svg";
import git from "../../assets/images/skills/tools/git.svg";
import github from "../../assets/images/skills/tools/github.svg";
import linux from "../../assets/images/skills/tools/linux.svg";
import tailwindcss from "../../assets/images/skills/tools/tailwindcss.svg";

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
    <section id="skills">
      <SectionTitle text={"Tech Stack"} />
      <div className="mx-auto max-w-screen-lg du-tabs du-tabs-lift m-24">
        <label className="du-tab">
          <input type="radio" name="my_tabs_4" defaultChecked />
          <img src={code} alt="" className="size-4 mx-3" />
          Programming Languages
        </label>
        <div className="du-tab-content bg-base-100 border-base-300 p-6">
          <SkillComponent skills={pl} />
        </div>

        <label className="du-tab">
          <input type="radio" name="my_tabs_4" />
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
    </section>
  );
}
