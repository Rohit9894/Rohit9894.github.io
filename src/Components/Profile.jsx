import { Box, Button, Flex, Image, Text, Link } from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";
import Fade from "react-reveal/Fade";
import Resume from "../assets/RohitGupta.pdf";
export default function Profile() {
  const handleDownload = () => {
    return window.open(
      "https://drive.google.com/file/d/1UTFk8Tat73iKrTvNPK8vVQpkXOXJ2SZ9/view?usp=sharing"
    );
  };
  return (
    <>
      <Box height={{ base: "50px", md: "80px" }}></Box>
      <Fade top>
        <Flex
          w={{ base: "100%", md: "80%" }}
          m="auto"
          alignItems="center"
          justifyContent={{ base: "center", md: "space-around" }}
          flexDirection={{ base: "column-reverse", lg: "row" }}
          rowGap={{ base: "10px", md: "10px" }}
          mt={{ base: "20px", md: "10px", lg: "40px" }}
        >
          <Box
            fontSize={{ base: "18px", md: "35px", lg: "55px" }}
            width={{ base: "90%", md: "100%", lg: "45%" }}
            m={{ base: "auto", lg: "0" }}
            fontWeight="600"
            textAlign={{ base: "center", lg: "left" }}
            lineHeight={{ base: "28px", md: "50px", lg: "80px" }}
          >
            <Flex
              justifyContent="center"
              gap="5px"
              direction={{ base: "row", lg: "column" }}
            >
              <Flex>
                <Text color="#RGBA(0, 0, 0, 0.64)">
                  <b>Hello World </b>
                </Text>
                <Image
                  mt="-5px"
                  w={{ base: "40px", md: "60px", lg: "85px" }}
                  src="https://cliply.co/wp-content/uploads/2021/02/392102850_EARTH_EMOJI_400px.gif"
                />
              </Flex>

              <Text color="#RGBA(0, 0, 0, 0.64)">
                {" "}
                <b>Myself</b> <b style={{ color: "#805AD5" }}>Rohit Gupta</b>
              </Text>
            </Flex>
            <Text color="#RGBA(0, 0, 0, 0.64)   ">
              <b>MERN Developer</b>
            </Text>
            <Text
              as={Link}
              _hover={{ textDecoration: "none" }}
              download={true}
              href={Resume}
              onClick={handleDownload}
              target="_blank"
            >
              <Button
                size={{ base: "sm", md: "md", lg: "lg" }}
                mt={{ base: "10px", md: "0" }}
                colorScheme="purple"
              >
                Resume{" "}
                <b style={{ marginLeft: "5px" }}>
                  <HiDownload />
                </b>{" "}
              </Button>{" "}
            </Text>
          </Box>

          <Box>
            <Image
              src="https://avatars.githubusercontent.com/u/101738635?v=4"
              shadow="lg"
              mt={{ base: "10px", md: "0px" }}
              w={{ base: "150px", md: "200px", lg: "350px" }}
              borderRadius="50%"
              alt="Rohit Gupta"
            />
          </Box>
        </Flex>
      </Fade>
    </>
  );
}
