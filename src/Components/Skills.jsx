import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import GitCalenderOffical from "./GitHubCalender";
import GitStats from "./GitStats";
import Fade from "react-reveal/Fade";
import Frontend from "../data/frontendSkills.json";
import Backend from "../data/frontendSkills.json";
export default function Skills() {
  const VersionControl = [
    {
      id: 1,
      image:
        "https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png",
      title: "Git Hub",
    },
    {
      id: 2,
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      title: "Git",
    },
  ];
  return (
    <>
      <Box w={{ base: "95%", md: "90%", lg: "80%" }} m="auto" mt="5%">
        <Fade bottom>
          <Text
            textAlign="center"
            color="#805AD5"
            fontSize={{ base: "20px", md: "22px", lg: "40px" }}
            fontWeight={{ base: "600", md: "700" }}
          >
            Technical Skills
          </Text>
          <Text
            textAlign="center"
            fontSize={{ base: "12px", md: "18px", lg: "20px" }}
            fontWeight={{ base: "600", md: "600" }}
            mt={{ base: "10px", md: "20px", lg: "35px" }}
            letterSpacing={{ base: "3px" }}
          >
            FRONT END{" "}
          </Text>
          <SimpleGrid
            columns={[4, 4, 4, 4]}
            fontSize={{ base: "12px", md: "14px" }}
            fontWeight="600"
            rowGap="30px"
            mt={{ base: "5px", md: "10px" }}
          >
            {Frontend.map((elem) => {
              return (
                <Box
                  m="auto"
                  mt={{ base: "20px", md: "30px", lg: "6" }}
                  key={elem.id}
                >
                  <Image
                    w={{ base: "45px", md: "80px", lg: "70px" }}
                    m="auto"
                    _hover={{
                      transform: "scale(1.2)",
                      transitionDuration: "0.5s",
                    }}
                    src={elem.image}
                    borderRadius="5px"
                  />
                  <Text textAlign="center" mt={{ base: "10px", lg: "20px" }}>
                    {elem.title}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Fade>

        <Fade bottom>
          <Text
            textAlign="center"
            fontSize={{ base: "12px", md: "18px", lg: "20px" }}
            fontWeight={{ base: "600", md: "600" }}
            mt={{ base: "50px", md: "80px", lg: "70px" }}
            letterSpacing={{ base: "3px" }}
          >
            BACK END{" "}
          </Text>
          <SimpleGrid
            columns={[4, 4, 4, 4]}
            fontSize={{ base: "12px", md: "14px" }}
            fontWeight="600"
            rowGap="15px"
          >
            {Backend.map((elem) => {
              return (
                <Box
                  m="auto"
                  mt={{ base: "20px", md: "30px", lg: "6" }}
                  key={elem.id}
                >
                  <Image
                    w={{ base: "45px", md: "80px", lg: "70px" }}
                    m="auto"
                    src={elem.image}
                    borderRadius="5px"
                    _hover={{
                      transform: "scale(1.2)",
                      transitionDuration: "0.5s",
                    }}
                  />
                  <Text textAlign="center" mt={{ base: "10px", lg: "20px" }}>
                    {elem.title}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Fade>

        <Fade bottom>
          <Text
            textAlign="center"
            fontSize={{ base: "12px", md: "18px", lg: "20px" }}
            fontWeight={{ base: "600", md: "600" }}
            mt={{ base: "60px", md: "80px", lg: "55px" }}
            letterSpacing={{ base: "3px" }}
          >
            VERSION CONTROL
          </Text>
          <SimpleGrid
            columns={[2, 2, 2, 2]}
            fontSize={{ base: "12px", md: "14px" }}
            fontWeight="600"
            rowGap="15px"
            w={{ base: "45%" }}
            m="auto"
            mt={{ base: "5px", md: "10px" }}
          >
            {VersionControl.map((elem) => {
              return (
                <Box
                  m="auto"
                  mt={{ base: "20px", md: "30px", lg: "6" }}
                  key={elem.id}
                >
                  <Image
                    w={{ base: "45px", md: "80px", lg: "70px" }}
                    src={elem.image}
                    borderRadius="5px"
                    _hover={{
                      transform: "scale(1.2)",
                      transitionDuration: "0.5s",
                    }}
                  />
                  <Text textAlign="center" mt={{ base: "10px", lg: "15px" }}>
                    {elem.title}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Fade>
      </Box>

      <Fade>
        <Box>
          <GitStats />
        </Box>
      </Fade>

      <Fade>
        <Box>
          <GitCalenderOffical />
        </Box>
      </Fade>
    </>
  );
}
