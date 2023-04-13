import "./App.css";
import { useRef } from "react";
import { ChangeTheme } from "./Context/AppContext";
import Profile from "./Components/Profile";
import { Box } from "@chakra-ui/react";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import SocialProfileSimple from "./Components/AboutCard";

function App() {
  const ProfileRef = useRef(null);
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null);
  const { Theme } = ChangeTheme();

  const light = {
    backgroundColor: "#E9D8FD",
    color: "black",
  };

  const dark = {
    backgroundColor: "black",
    color: "white",
  };

  const HandleScrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <Box className="App" style={Theme === "light" ? light : dark}>
      <Navbar
        ProfileRef={() => HandleScrollTo(ProfileRef)}
        AboutRef={() => HandleScrollTo(AboutRef)}
        SkillsRef={() => HandleScrollTo(SkillsRef)}
        ProjectsRef={() => HandleScrollTo(ProjectRef)}
        ContactRef={() => HandleScrollTo(ContactRef)}
      />

      <Box ref={ProfileRef}>
        <Profile />
      </Box>

      <Box mt={{ base: "7%", md: "7%" }} ref={AboutRef}>
        <SocialProfileSimple />
      </Box>

      <Box mt={{ base: "10%", md: "7%", lg: "5%" }} ref={SkillsRef}>
        <Skills />
      </Box>

      <Box mt={{ base: "10%", md: "7%", lg: "6%" }} ref={ProjectRef}>
        <Projects />
      </Box>

      <Box mt={{ base: "7%", md: "7%", lg: "5%" }} ref={ContactRef}>
        <Contact />
      </Box>
    </Box>
  );
}

export default App;
