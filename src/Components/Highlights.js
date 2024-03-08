import greekSalad from "../assets/photos/greek salad.jpg"
import lemonDessert from "../assets/photos/lemon dessert.jpg"
import bruchetta from "../assets/photos/bruchetta.svg"
import deleivery from "../assets/photos/deleivery.png"
import { Button, Card, HStack, Heading, VStack,Image, CardBody,Text, CardFooter, useMediaQuery, Flex, Grid } from "@chakra-ui/react";

function Highlights () {

    const highLights = [
        {
            img: greekSalad,
            heading: 'Greek Salad',
            price: '12.99$',
            description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            delivery: 'Order a Delivery',
            imgDelivery: deleivery
        },
        {
            img: lemonDessert,
            heading: 'Lemon Dessert',
            price: '5.99$',
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
            delivery: 'Order a Delivery',
            imgDelivery: deleivery
        },
        {
            img: bruchetta,
            heading: 'Bruchetta',
            price: '5.00$',
            description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
            delivery: 'Order a Delivery',
            imgDelivery: deleivery
        }
    ];

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')


    return (
        <VStack
            maxW={'848px'}
            mx={'auto'}
            className="section"
            alignItems={'center'}
            backgroundColor={'white'}>
            <HStack 
                    justifyContent={'center'}
                    w={'100%'}
                    >
                <Heading
                    size={'md'}
                    mr={!isLargerThan768 ? '5px' : "auto"}
                >The Week Specials</Heading>
                <Button
                    ml={!isLargerThan768 ? '5px' : "auto"}
                    backgroundColor={'yellow'}>Online Menu
                </Button>
            </HStack>
            <Grid
                    templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)']}
                    gap={'15px'}
                    mb={'20px'}
                >
                {highLights.map((item,index) => (
                    <Card key={index}
                        borderRadius={'16px'}
                        p={0}
                        maxW={'xs'}
                        cursor={'pointer'}
                        backgroundColor={'#EDEFEE'}
                    >
                        <Image src={item.img}
                            objectFit={'inherit'}
                            borderTopRadius={'16px'}
                            h={'185px'}
                            border={'1px solid black'}
                        />
                        <CardBody>
                            <HStack justifyContent={'space-between'}>
                                <Heading size={'sm'}>{item.heading}</Heading>
                                <Heading size={'sm'}>{item.price}</Heading>
                            </HStack>
                            <Text size={'sm'} pt={'20px'}>{item.description}</Text>
                        </CardBody>
                        <CardFooter>
                            <HStack alignContent={'flex-end'}>
                                <Heading as='h6'size={'sm'} >Order a delivery</Heading>
                                <Image src={item.imgDelivery}
                                    w={'17px'}
                                    h={'10px'}  />
                            </HStack>
                        </CardFooter>
                    </Card>
                ))}
            </Grid>
        </VStack>
    )
}

export default Highlights