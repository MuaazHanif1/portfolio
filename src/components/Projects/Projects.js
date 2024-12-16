import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import teamsheet from "../../Assets/Projects/teamsheet.png";
import beMyCorrier from "../../Assets/Projects/beMyCorrier.png";
import Devcrew2 from "../../Assets/Projects/Devcrew2.png";
import imanagedhealthcare from "../../Assets/Projects/imanagedhealthcare.png";
import quranic2 from "../../Assets/Projects/quranic2.png";
import Glozzom from "../../Assets/Projects/Glozzom.png";

function Projects() {
  return (
    <Container
      fluid
      className="project-section"
    >
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={teamsheet}
              isBlog={false}
              title="Team Sheet Pro"
              description="Team Sheet Pro, a platform designed for team management. The background features a vibrant stadium filled with cheering fans and a young soccer player in action, adding an energetic feel.  highlighting features such as adding teams, creating squads, managing events, and printing team sheets in PDF format. The clean design and blue-white color scheme make the interface professional and user-friendly."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://teamsheetpro.com/#/login"
            />
          </Col>
          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={beMyCorrier}
              isBlog={false}
              title="Be My Courier"
              description="Experience a new era of package delivery with our fast and effortless service. With just a click, you can send packages swiftly, eliminating the frustration of slow and unreliable courier services. Our platform ensures secure, seamless shipments that reach their destination in record time, providing peace of mind and convenience. Whether for personal or business needs, we prioritize efficiency and reliability, helping you save time and effort. Say goodbye to delays and complicated processes—our user-friendly system makes shipping a hassle-free experience from start to finish."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://bemycourier.netlify.app/"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={imanagedhealthcare}
              isBlog={false}
              title="Imanaged Health Care"
              description="Imagined Health care is a modern and user-friendly website designed to streamline healthcare management. It allows users to add patients, manage doctor profiles, and efficiently send medication orders to pharmacies. This platform simplifies communication between healthcare providers and pharmacies, ensuring a seamless and organized workflow for better patient care."
              demoLink="https://imanagedhealthcare.dev/login"
            />
          </Col>
          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={Devcrew2}
              isBlog={false}
              title="DevCrew"
              description="DevCrew, with a sleek and professional design. It highlights DevCrew's expertise in web and Android development, content writing, UI/UX, and graphic designing."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://devcrew.netlify.app/"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={Glozzom}
              isBlog={false}
              title="Glozzom"
              description="Glozzom a tool to increase download speeds by up to 500 percent, resume and schedule downloads. Comprehensive error recovery and resume capability will restart broken or interrupted downloads due to lost connections, network problems, computer shutdowns, or unexpected power outages. Simple graphic user interface makes IDM user friendly and easy to use. Internet Download Manager has a smart download logic accelerator that features intelligent dynamic file segmentation and safe multipart downloading technology to accelerate your downloads."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://glozam1.netlify.app/"
            />
          </Col>
          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={quranic2}
              isBlog={false}
              title="Learn Quran"
              description="Learn Quran, an educational platform that focuses on teaching the Qur'an and Islam. The design is clean and features soft colors, including white, green, and gold, creating a calm and professional appearance. The page highlights a Hadith of the Prophet Muhammad (SAW): 'The best amongst you is the one who learns the Qur'an and teaches it'."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://frosty-dijkstra-769e35.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
