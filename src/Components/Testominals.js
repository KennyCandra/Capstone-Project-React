import { Card, CardBody, CardFooter, CardHeader, Grid, HStack, Heading, Image,Text, VStack } from "@chakra-ui/react";
import placeHolderImage from "../assets/photos/place holder.jpg"

function Testiominals () {
    const card = () =>  { return(
            <Card p={0} alignItems={'center'}
            justifyContent={'flex-end'}
            w={'200px'}
            h={'175px'}>
                    <CardHeader >
                        <Heading size={'h6'}>Rating</Heading>
                    </CardHeader>
                    <CardBody pt={0}>
                        <HStack justifyContent={'flex-start'}>
                            <Image src={placeHolderImage} w={'20%'} />
                            <Heading size={'h6'} w={'50%'}>Name</Heading>
                        </HStack>
                        <CardFooter p={0} pt={'10px'}>
                            <Text>
                                Review
                            </Text>
                        </CardFooter>
                    </CardBody>
            </Card>
    )}

    const cardComponents = Array.from({ length: 4 }, (_, index) => (
        <div key={index}>
            {card()}
        </div>
    ));
    return (
        <VStack backgroundColor={'#D9D9D9'} p={'20px'}>
            <Heading as={'h1'}>Testiominals</Heading>
            <Grid
                templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)']}
                gap={'20px'}
                >
                    {cardComponents}
            </Grid>
        </VStack>
    )
}

export default Testiominals