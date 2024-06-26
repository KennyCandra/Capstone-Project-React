import deleivery from "../assets/photos/deleivery.png"
import { Button, Card, HStack, Heading, VStack,Image, CardBody,Text, CardFooter, useMediaQuery, Grid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import data from "../assets/data/data.json"
import { useContext, useEffect } from "react";
import { ContextApp } from "./context/Context";

function Highlights () {

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const navigate = useNavigate()
    const {addToCart} = useContext(ContextApp)

    const pizzaMenu = data['pizza'];
    const randomPizzas = [];

    if(!isLargerThan768){
        if(randomPizzas.length < 2){
            for(let i = 0 ; i < 2; i++){
                const randomIndex = Math.floor(Math.random() * pizzaMenu.length);
                const randomPizza = pizzaMenu[randomIndex];
                if(!randomPizzas.includes(randomPizza)){
                    randomPizzas.push(randomPizza);
                }
            }
        }
    } else if (isLargerThan768){
        if(randomPizzas.length < 5){
            for(let i = 0 ; i < 3; i++){
                const randomIndex = Math.floor(Math.random() * pizzaMenu.length);
                const randomPizza = pizzaMenu[randomIndex];
                if(!randomPizzas.includes(randomPizza)){
                    randomPizzas.push(randomPizza);
                }
            }
        }
    }


    const highLights = randomPizzas.map((pizza) => {
        return {
            img: pizza.image,
            heading: pizza.name,
            price: `${pizza.price} $`,
            description: pizza.description,
            delivery: 'Order a Delivery',
            imgDelivery: deleivery
        };
    });


    const handleClick = () => {
        navigate('../menu')
        console.log(randomPizzas)
    }

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
                    mt={'3%'}
                    ml={!isLargerThan768 ? '5px' : "auto"}
                    onClick={handleClick}
                    className='BTN' background={'#F4CE14'}  _hover={{ bg: '#EE9972' }}>Online Menu
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
                            <HStack justifyContent={'space-between'} alignItems={'baseline'}>
                                <Heading size={'sm'} fontWeight={'bold'}>{item.heading}</Heading>
                                <VStack>
                                    <Heading size={'sm'} fontWeight={'bold'}>{item.price}</Heading>
                                </VStack>
                            </HStack>
                            <Text size={'sm'} pt={'20px'}>{item.description}</Text>
                        </CardBody>
                        <CardFooter>
                            <HStack alignContent={'flex-end'}>
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