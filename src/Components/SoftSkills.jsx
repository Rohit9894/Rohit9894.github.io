import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { BsFillChatLeftFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { MdSettingsAccessibility } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import Fade from 'react-reveal/Fade'

export default function SoftSkills() {
    return (
        <>
            <Fade bottom>
                <Text textAlign='center' color='#805AD5' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }} mt={{ base: '50px', md: '80px', lg: '85px' }}>Soft Skills</Text>
                <SimpleGrid columns={[2, 4, 4, 4]} fontSize={{ base: '12px', md: '14px' }} fontWeight='600' rowGap='15px' w={{ base: '95%' }} m='auto' mt={{ base: '5px', md: '10px' }}>
                    <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }}>
                        <Flex><Text fontSize={{ base: '25px', md: '40px', lg: '40px' }} m='auto'><BsFillChatLeftFill /></Text></Flex>
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Communication</Text>
                    </Box>

                    <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} >
                        <Flex><Text fontSize={{ base: '25px', md: '40px', lg: '40px' }} m='auto'><FaPeopleCarry /></Text></Flex>
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Team Work</Text>
                    </Box>

                    <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} >
                        <Flex><Text fontSize={{ base: '25px', md: '40px', lg: '40px' }} m='auto'><MdSettingsAccessibility /></Text></Flex>
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Adaptibility</Text>
                    </Box>

                    <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} >
                        <Flex><Text fontSize={{ base: '25px', md: '40px', lg: '40px' }} m='auto'><RiTeamFill /></Text></Flex>
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Leadership</Text>
                    </Box>
                </SimpleGrid>
            </Fade>
        </>
    )
}