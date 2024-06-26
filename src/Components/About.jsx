import { Box,Heading,Image,Stack,Text, VStack, useMediaQuery } from "@chakra-ui/react";
import restaurantChef from "../assets/photos/restaurant chef B.jpg"


function About () {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    return (
        <>
        <Stack justifyContent={'center'}
        pt={'20px'}
         flexDir={isLargerThan768 ? 'row' : 'column'}
         ml={'10%'}>
            <VStack alignItems={'flex-start'}>
                <Heading size={'h1'} fontSize={'2rem'} className="h1" color={'black'}>Little Lemon</Heading>
                <Heading size={'h2'} className="h2" color={'grey'} fontSize={'1.5rem'}>Chicago</Heading>
                <Box w={isLargerThan768 ? '370px' : '100%'} h={isLargerThan768 ? '260px' : '15%'}>
                <Text>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>
            </Box>
            </VStack>
            <Image
                src={restaurantChef}
                boxSize={['200px' , '300px', '325px' , '375px']}
                pb={'20px'}
                />
        </Stack>

        
        </>
    )
}

export default About;




     