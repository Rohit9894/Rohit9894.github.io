import { Text } from "@chakra-ui/react";

import Fade from "react-reveal/Fade";
import ProjectsCard from "./ProjectsCard";
import projectData from "../data/projectData";

export default function Projects() {
  const [LiveChat, MailTest, Campaign, NDTV, Finder] = projectData;
  return (
    <>
      <Fade>
        <Text
          textAlign="center"
          color="#805AD5"
          fontSize={{ base: "20px", md: "22px", lg: "40px" }}
          fontWeight={{ base: "600", md: "700" }}
        >
          Projects
        </Text>
      </Fade>
      <Fade left>
        <ProjectsCard
          key={LiveChat.id}
          name={LiveChat.name}
          image1={LiveChat.src1}
          image2={LiveChat.src2}
          bio={LiveChat.info}
          tstack={LiveChat.tstack}
          details={LiveChat.team}
          github={LiveChat.repo}
          deployed={LiveChat.link}
          direction={LiveChat.direction}
        />
      </Fade>
      <Fade right>
        <ProjectsCard
          key={MailTest.id}
          name={MailTest.name}
          image1={MailTest.src1}
          image2={MailTest.src2}
          bio={MailTest.info}
          tstack={MailTest.tstack}
          details={MailTest.team}
          github={MailTest.repo}
          deployed={MailTest.link}
          direction={MailTest.direction}
        />
      </Fade>
      <Fade left>
        <ProjectsCard
          key={Campaign.id}
          name={Campaign.name}
          image1={Campaign.src1}
          image2={Campaign.src2}
          bio={Campaign.info}
          tstack={Campaign.tstack}
          details={Campaign.team}
          github={Campaign.repo}
          deployed={Campaign.link}
          direction={Campaign.direction}
        />
      </Fade>
      <Fade right>
        <ProjectsCard
          key={NDTV.id}
          name={NDTV.name}
          image1={NDTV.src1}
          image2={NDTV.src2}
          bio={NDTV.info}
          tstack={NDTV.tstack}
          details={NDTV.team}
          github={NDTV.repo}
          deployed={NDTV.link}
          direction={NDTV.direction}
        />
      </Fade>
      <Fade left>
        <ProjectsCard
          key={Finder.id}
          name={Finder.name}
          image1={Finder.src1}
          image2={Finder.src2}
          bio={Finder.info}
          tstack={Finder.tstack}
          details={Finder.team}
          github={Finder.repo}
          deployed={Finder.link}
          direction={Finder.direction}
        />
      </Fade>
    </>
  );
}
