import { SectionTitle } from "../SectionTitle";
import ProjectCardLeft from "./ProjectCardLeft";
import ProjectCardRight from "./ProjectCardRight";

import fraudshield from "../../assets/images/projects/fraudshield.png";
import healconnect from "../../assets/images/projects/healconnect.png";
import spamcache from "../../assets/images/projects/spamcache.png";
import forum from "../../assets/images/projects/forum.png";

export default function Projects() {
  return (
    <>
      <section id="projects">
        <SectionTitle text={"Projects"} />
        <div className="py-12 max-w-screen-lg mx-auto">
          <ProjectCardRight
            title="FraudShield"
            description="FraudShield is a comprehensive spam detection service 
            designed to protect users from fraudulent and spam calls. This 
            cross-platform mobile app, built with Flutter, helps classify phone 
            numbers as Not Spam, Likely Spam, or Confirmed Spam using an advanced 
            scoring algorithm. With real-time detection, adaptive learning, 
            and modern UI, FraudShield keeps you informed and safe."
            tech="Spring Boot, MySQL, RESTful API, React Native"
            link="https://github.com/vaibhavlachhwani/FraudShield"
            img_src={fraudshield}
          />
          <ProjectCardLeft
            title="HealConnect"
            description="HealConnect is a comprehensive platform designed to 
            improve mental health accessibility, engagement, and continuity of care, 
            especially for individuals in underserved areas. By integrating tools 
            like virtual health camps, personalized mental health chatbots, mood 
            tracking, and community forums, HealConnect aims to provide a 
            user-friendly, holistic solution to mental health support."
            link="https://github.com/vaibhavlachhwani/HealConnect"
            tech="Spring Boot, NoSQL, RESTful API, React, TailwindCSS"
            img_src={healconnect}
          />
          <ProjectCardRight
            title="SpamCache"
            description="SpamCache is a spam detection service that allows users 
            to report spam phone numbers and check if a number is likely to be spam. 
            The system utilizes a sophisticated scoring algorithm that considers 
            the number of reports, time since the last report, and a logarithmic 
            weight scaling to assess risk dynamically. It is built for high 
            performance and scalability, ensuring real-time spam classification."
            link="https://github.com/vaibhavlachhwani/SpamCache"
            tech="Spring Boot, PostgreSQL, GraphQL, Docker"
            img_src={spamcache}
          />
          <ProjectCardLeft
            title="Anonymous Forum"
            description="A community forum with a Spring Boot backend. Created for HealConnect, a one-stop personal Mental Health website submitted in Odoo x Amalthea Hackathon held at IIT Gandhinagar on Nov 9, 2024 by my team Team Twix. Users can register, create posts, and add comments. Each post displays its content along with comments from various users."
            link="https://github.com/vaibhavlachhwani/anonymous-forum"
            tech="Spring Boot, NoSQL, RESTful API, React, TailwindCSS, daisyUI"
            img_src={forum}
          />
        </div>
      </section>
    </>
  );
}
