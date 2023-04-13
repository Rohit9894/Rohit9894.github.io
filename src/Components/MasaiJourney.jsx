import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Fade from 'react-reveal/Flash'

export default function MasaiJourney() {
    return (
        <>
        <Fade>
            <SimpleGrid columns={[2, 2, 4, 4]} w={{ base: '90%', md: '95%', lg: '80%' }} m='auto' rowGap={{ base: '20px' }} gap='20px'>
                <Box border={{ base: '2px solid #B794F4', md: '3px solid #B794F4', lg: '5px solid #B794F4' }} textAlign='center' padding={{ base: '10px', lg: '30px' }} width={{ base: '85%', lg: '80%' }} m='auto' borderRadius='10px' shadow='lg'>
                    <Text fontSize={{ base: '16px', md: '18px', lg: '24px' }} fontWeight='600'><b>1000+</b></Text>
                    <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} fontWeight='500'>Hour's of Coding</Text>
                </Box>

                <Box border={{ base: '2px solid #B794F4', md: '3px solid #B794F4', lg: '5px solid #B794F4' }} textAlign='center' padding={{ base: '10px', lg: '30px' }} width={{ base: '85%', md: '90%', lg: '80%' }} m='auto' borderRadius='10px' shadow='lg'>
                    <Text fontSize={{ base: '16px', md: '18px', lg: '24px' }} fontWeight='600'><b>400+</b></Text>
                    <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} fontWeight='500'>Problems Solved</Text>
                </Box>

                <Box border={{ base: '2px solid #B794F4', md: '3px solid #B794F4', lg: '5px solid #B794F4' }} textAlign='center' padding={{ base: '10px', lg: '30px' }} width={{ base: '85%', md: '90%', lg: '80%' }} m='auto' borderRadius='10px' shadow='lg'>
                    <Text fontSize={{ base: '16px', md: '18px', lg: '24px' }} fontWeight='600'><b>200+</b></Text>
                    <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} fontWeight='500'>Soft Skills Sessions</Text>
                </Box>

                <Box border={{ base: '2px solid #B794F4', md: '3px solid #B794F4', lg: '5px solid #B794F4' }} textAlign='center' padding={{ base: '10px', lg: '30px' }} width={{ base: '85%', md: '90%', lg: '80%' }} m='auto' borderRadius='10px' shadow='lg'>
                    <Text fontSize={{ base: '16px', md: '18px', lg: '24px' }} fontWeight='600'><b>10+</b></Text>
                    <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} fontWeight='500'>Project's Built</Text>
                </Box>
            </SimpleGrid>
            </Fade>
        </>
    )
}