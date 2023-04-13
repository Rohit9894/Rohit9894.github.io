import {
  Box,
  Center,
  Text,
  Stack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChangeTheme } from "../Context/AppContext";
import LinkedinButton from "./LinkedInFollowBtn";
import Fade from "react-reveal/Fade";

export default function SocialProfileSimple() {
  const { Theme } = ChangeTheme();

  const light = {
    backgroundColor: "#E9D8FD",
    color: "black",
  };

  const dark = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <>
      <Fade bottom>
        <Text
          color="#805AD5"
          fontSize={{ base: "22px", md: "22px", lg: "40px" }}
          fontWeight={{ base: "600", md: "700" }}
          textAlign="center"
        >
          About Me
        </Text>
        <Center style={Theme === "light" ? light : dark}>
          <Box
            style={Theme === "light" ? light : dark}
            maxW={{ base: "400px", md: "500px", lg: "550px" }}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            rounded={"lg"}
            textAlign={"center"}
          >
            <Text
              textAlign={"justify"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
              style={Theme === "light" ? light : dark}
              width={{ base: "90%" }}
              m="auto"
            >
              I’m an enthusiastic Full Stack Web Developer with a passion for
              developing scalable web applications and working across the full
              stack. Adaptive to all kinds of people, and surrounding and always
              appreciate constructive criticism to improve my performance. A
              highly self-motivated person with strong communication skills and
              effective team management skills. A great learner with a
              problem-solving mindset.
            </Text>

            <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                #WebDesign
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                #mern
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                #tech
              </Badge>
            </Stack>

            <Stack mt={1} direction={"row"} spacing={4}>
              <a
                href="https://www.linkedin.com/in/abrar-khan-b67333230/"
                rel="noreferrer"
                target="_blank"
                style={{ width: "90%", margin: "auto" }}
              >
                <LinkedinButton />
              </a>
            </Stack>
          </Box>
        </Center>
      </Fade>
    </>
  );
}
