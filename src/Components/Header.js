import { useState } from 'react';
import Chef from '../assets/photos/restauranfood.jpg';
import { Image, Stack, Text, Heading, Button, VStack, Box, useMediaQuery } from '@chakra-ui/react';



function Header() {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')


  return (
    <>
      <Stack
       pl={['30px', '30px', '120px', '120px']}
        bgColor={'#495E57'}
        h='auto'
        justifyContent={'center'}
        direction={['column' , 'column' , 'row' , 'row']}
        alignItems={isLargerThan768 ? null : 'center'}
      >
        <VStack alignItems={isLargerThan768 ? 'flex-start' : 'center'}
        pt={'30px'}>
            <Heading as='h1' fontSize='xx-large' mb={15}>
                Little Lemon
            </Heading>
            <Heading as='h2' fontSize='x-large' color={'white'}>
                Chicago
            </Heading>
            <Text
                w={'422px'}
                color={'white'}
                fontSize={'0.65em'}
                pb={'30px'}
                h={'79px'}
                maxW={'422px'}  >
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
            </Text>
          <Button type='submit'>Reserve a Table</Button>
        </VStack>
        <Box boxSize={['200px' , '300px', '375px' , '375px']}>
          <Image src={Chef}
            boxSize={['200px' , '300px', '375px' , '375px']}
            borderRadius={16}
            mt={'20px'}
            border={'solid 1px black'} />
        </Box>
      </Stack>
    </>
  );
}

export default Header;