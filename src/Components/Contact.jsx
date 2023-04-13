import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import CopyRight from "./CopyRight";
import Fade from "react-reveal/Fade";
import { Email } from "./Email";

export default function Contact() {
  return (
    <>
      <Fade bottom>
        <Text
          textAlign="center"
          color="#805AD5"
          fontSize={{ base: "20px", md: "22px", lg: "40px" }}
          fontWeight={{ base: "600", md: "700" }}
        >
          Contact
        </Text>
        <Fade bottom>
          <Box
            w={["90%", "70%", "60%", "50%"]}
            m="auto"
            background={"blackAlpha.100"}
            p={2}
          >
            <Email />
          </Box>
        </Fade>
        <Box pb={{ base: "20px", md: "30px" }}>
          <Flex
            w={{ base: "30%", md: "20%", lg: "10%" }}
            m="auto"
            justifyContent="space-around"
            fontSize={{ base: "22px", md: "26px", lg: "30px" }}
            mt="20px"
          >
            <Box>
              <Tooltip label="LinkedIn" bg="#EDF2F7" color="black">
                <a
                  href="https://www.linkedin.com/in/rohit-gupta-253760237/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Text>
                    <BsLinkedin />
                  </Text>
                </a>
              </Tooltip>
            </Box>

            <Box>
              <Tooltip label="GitHub" bg="#EDF2F7" color="black">
                <a
                  href="https://github.com/Rohit9894"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Text>
                    <BsGithub />
                  </Text>
                </a>
              </Tooltip>
            </Box>
          </Flex>
        </Box>

        <Box
          width={{ base: "100%", md: "80%", lg: "50%" }}
          m="auto"
          textAlign="center"
          paddingBottom={{ base: "10px", lg: "30px" }}
        >
          <CopyRight />
        </Box>
      </Fade>
    </>
  );
}
