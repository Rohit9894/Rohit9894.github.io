import { SiLinkedin } from 'react-icons/si';
import { Button, Center, Text } from '@chakra-ui/react';

export default function LinkedinButton() {
  return (
    <Center p={4}>
      <Button
        w={'90%'}
        maxW={'md'}
        colorScheme={'#805AD5'}
        bg='#805AD5'
        borderRadius='15px'
        rightIcon={<SiLinkedin />}>
        <Center>
          <Text>Follow on LinkedIn</Text>
        </Center>
      </Button>
    </Center>
  );
}