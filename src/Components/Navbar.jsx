import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Link,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ChangeTheme } from "../Context/AppContext";
import Fade from "react-reveal/Flash";

import Resume from "../assets/RohitGupta.pdf";
export default function Navbar({
  ProfileRef,
  AboutRef,
  SkillsRef,
  ProjectsRef,
  ContactRef,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Theme, ToggleTheme } = ChangeTheme();
  const handleDownload = () => {
    return window.open(
      "https://drive.google.com/file/d/1UTFk8Tat73iKrTvNPK8vVQpkXOXJ2SZ9/view"
    );
  };
  const light = {
    backgroundColor: "white",
    color: "black",
  };

  const dark = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <>
      <Box
        px={4}
        style={Theme === "light" ? light : dark}
        className="ChackraNavBar"
        shadow="lg"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            style={Theme === "light" ? light : dark}
            size="lg"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="30px" />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            w="90%"
            m={"auto"}
            color="#RGBA(0, 0, 0, 0.64)"
          >
            <Box p="5px">
              {Theme === "light" ? (
                <Heading
                  fontFamily="'Italianno', cursive"
                  fontWeight="bold"
                  fontSize="38px"
                  color="black"
                >
                  RG
                </Heading>
              ) : (
                <Heading
                  fontFamily="'Italianno', cursive"
                  fontWeight="bold"
                  fontSize="38px"
                  color="white"
                >
                  RG
                </Heading>
              )}
            </Box>
            <Flex
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              gap="10px"
              w={{ base: "", md: "60%", lg: "40%" }}
              justifyContent="space-between"
              alignItems="center"
              color="#805AD5"
              fontWeight="650"
            >
              <Text onClick={ProfileRef} cursor="pointer">
                Home
              </Text>
              <Text onClick={AboutRef} cursor="pointer">
                About Me
              </Text>
              <Text onClick={SkillsRef} cursor="pointer">
                Skills
              </Text>
              <Text onClick={ProjectsRef} cursor="pointer">
                Project
              </Text>
              <Text onClick={ContactRef} cursor="pointer">
                Contact
              </Text>
              <Text
                as={Link}
                _hover={{ textDecoration: "none" }}
                download={true}
                href={Resume}
                onClick={handleDownload}
                target="_blank"
              >
                Resume
              </Text>
            </Flex>
          </Flex>
          <Box width="5%" justifyContent={"center"} display="flex">
            <Fade>
              <Text onClick={ToggleTheme} cursor="pointer">
                {Theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
              </Text>
            </Fade>
          </Box>
        </Flex>
        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}
            style={Theme === "light" ? light : dark}
          >
            <Stack as={"nav"} spacing={4} color="#805AD5" fontWeight="600">
              <Text onClick={ProfileRef} cursor="pointer">
                Home
              </Text>
              <Text onClick={AboutRef} cursor="pointer">
                About Me
              </Text>
              <Text onClick={SkillsRef} cursor="pointer">
                Skills
              </Text>
              <Text onClick={ProjectsRef} cursor="pointer">
                Project
              </Text>
              <Text onClick={ContactRef} cursor="pointer">
                Contact
              </Text>
              <Text
                as={Link}
                _hover={{ textDecoration: "none" }}
                download={true}
                href="/Abrar-Khan-Resume.pdf"
                onClick={handleDownload}
                target="_blank"
              >
                Resume
              </Text>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
