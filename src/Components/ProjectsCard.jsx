import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { AiFillChrome, AiFillGithub } from "react-icons/ai";

function ProjectsCard({
  name,
  image1,
  image2,
  bio,
  details,
  tstack,
  github,
  deployed,
  direction,
}) {
  return (
    <div>
      {direction ? (
        <Flex
          w="85%"
          m="auto"
          p="20px"
          gap={["20px", "20px", "30px", "60px"]}
          flexDirection={["column-reverse", "column", "column", "row"]}
          justifyContent={"center"}
          mt="35px"
        >
          <Box
            bg="blackAlpha.100"
            borderRadius={"10px"}
            p={2}
            w={["95%", "95%", "85%", "50%"]}
          >
            <Text
              fontSize={{ base: "14px", md: "18px", lg: "22px" }}
              fontWeight="600"
            >
              {name}
            </Text>
            <Text
              fontSize={{ base: "13px", md: "14px", lg: "16px" }}
              textAlign="justify"
            >
              {bio}
            </Text>
            <Text
              fontSize={{ base: "12px", md: "14px", lg: "16px" }}
              mt={{ base: "5px", md: "10px", lg: "12px" }}
            >
              {details}
            </Text>
            <Text
              fontSize={{ base: "14px", md: "18px", lg: "22px" }}
              mt={{ base: "5px", md: "10px", lg: "12px" }}
              fontWeight="600"
            >
              Tech Stack
            </Text>
            <Text
              fontSize={{ base: "10px", md: "14px" }}
              mt={{ base: "2px", md: "5px", lg: "2px" }}
              letterSpacing={{ base: "0.5", lg: "2px" }}
            >
              {tstack}
            </Text>
            <Flex gap="20px" mt={{ base: "10px" }}>
              <Text fontSize={{ base: "20px", md: "25px", lg: "30px" }}>
                <a href={deployed} rel="noreferrer" target="_blank">
                  <AiFillChrome />
                </a>
              </Text>
              <Text fontSize={{ base: "20px", md: "25px", lg: "30px" }}>
                <a href={github} rel="noreferrer" target="_blank">
                  <AiFillGithub />
                </a>
              </Text>
            </Flex>
          </Box>

          {/* <a
            href="https://your-store-app-heyabrar.vercel.app/"
            rel="noreferrer"
            target="_blank"
          > */}
          <Box className="cardImg" w={["95%", "95%", "85%", "50%"]}>
            <Image m="auto" src={image1} alt="Front Img" borderRadius="8px" />
            <Image src={image2} alt="Back Img" className="imgTop" />
          </Box>
          {/* </a> */}
        </Flex>
      ) : (
        <Flex
          w="85%"
          m="auto"
          p="20px"
          gap={["20px", "20px", "30px", "60px"]}
          flexDirection={["column", "column", "column", "row-reverse"]}
          justifyContent={"center"}
          mt="35px"
        >
          <Box
            bg="blackAlpha.100"
            borderRadius={"10px"}
            p={2}
            w={["95%", "95%", "85%", "50%"]}
          >
            <Text
              fontSize={{ base: "14px", md: "18px", lg: "22px" }}
              fontWeight="600"
            >
              {name}
            </Text>
            <Text
              fontSize={{ base: "13px", md: "14px", lg: "16px" }}
              mt={{ base: "5px", md: "10px", lg: "12px" }}
              lineHeight={{ base: "20px", md: "25px", lg: "30px" }}
              textAlign="justify"
            >
              {bio}
            </Text>
            <Text
              fontSize={{ base: "12px", md: "14px", lg: "16px" }}
              mt={{ base: "5px", md: "10px", lg: "12px" }}
            >
              {details}
            </Text>
            <Text
              fontSize={{ base: "14px", md: "18px", lg: "22px" }}
              mt={{ base: "5px", md: "10px", lg: "12px" }}
              fontWeight="600"
            >
              Tech Stack
            </Text>
            <Text
              fontSize={{ base: "10px", md: "14px" }}
              mt={{ base: "2px", md: "5px", lg: "2px" }}
              letterSpacing={{ base: "0.5", lg: "2px" }}
            >
              {tstack}
            </Text>
            <Flex gap="20px" mt={{ base: "10px" }}>
              <Text fontSize={{ base: "20px", md: "25px", lg: "30px" }}>
                <a href={deployed} rel="noreferrer" target="_blank">
                  <AiFillChrome />
                </a>
              </Text>
              <Text fontSize={{ base: "20px", md: "25px", lg: "30px" }}>
                <a href={github} rel="noreferrer" target="_blank">
                  <AiFillGithub />
                </a>
              </Text>
            </Flex>
          </Box>

          {/* <a
            href="https://your-store-app-heyabrar.vercel.app/"
            rel="noreferrer"
            target="_blank"
          > */}
          <Box className="cardImg" w={["95%", "95%", "85%", "50%"]}>
            <Image m="auto" src={image1} alt="Front Img" borderRadius="8px" />
            <Image src={image2} alt="Back Img" className="imgTop" />
          </Box>
          {/* </a> */}
        </Flex>
      )}
    </div>
  );
}

export default ProjectsCard;
