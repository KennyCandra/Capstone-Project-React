import {Heading, VStack, HStack, Text, Box, Card, CardBody, Image,Button} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import data from "../assets/data/data.json"
import { ContextApp } from "./context/Context"

let menu = Object.getOwnPropertyNames(data)


function Menuitems () {

    const [selected , setSelected] = useState('0')
    const[selectedDish , setSelectedDish] =  useState('pizza')
    const {addToCart , cartItem} = useContext(ContextApp)
    const [id , setId] = useState()

    // useEffect(()=> {
    //     data[selectedDish].forEach(item => {
    //         item.id = item.id + item.name[0] + item.name[1]
    //     });
    // })

    const handleClick = (item , key) => {
    setSelectedDish(item)
    setSelected(key)
}
    return  (
        <>
        <VStack>
            <Heading
                as={'h1'} colorScheme="black"
                justifyContent={'center'}>
                    Menu
            </Heading>
            <HStack gap={'2rem'}>
                {menu.map((item , key) => (
                    <Box borderRadius={'50px'}
                        border={'2px solid grey'}
                        key={key}
                        padding={'0.5rem'}
                        cursor={'pointer'}
                        className={selected === key ? 'item-container active' : ''}
                        onClick={() => handleClick(item , key)}>
                    <Text fontWeight={'bold'} textTransform={"capitalize"} key={key}>{item}</Text>
                    </Box>
                ))}
            </HStack>
             <HStack>
                <Card>
                    <CardBody>
                        <HStack
                        gap={'2rem'}>
                            {data[selectedDish].map((dish) => (
                                <>
                                <Box boxShadow={'lg'}>
                                    <Card
                                    border={'2px solid black'}
                                    borderRadius={'25px'}
                                    cursor={'pointer'}
                                    h={'350px'}
                                    w={'200px'}>
                                        <Image
                                            src={dish.image}
                                            width={'200px'}
                                            height={'200px'}
                                            />
                                        <CardBody position={'relative'}>
                                            <Text
                                                as='h2'
                                                fontWeight={'bold'}>{dish.name}</Text>
                                            <Text as={'h6'} color={'grey'} fontSize={'15px'}>
                                                {dish.description}
                                            </Text>
                                            <HStack position={'absolute'}>
                                                <Button background={'yellow'} onClick={()=> addToCart(dish)} >Add To Cart</Button>
                                                <Text as={'h1'} fontWeight={'bold'}>
                                                    {dish.price}$
                                                </Text>
                                            </HStack>
                                        </CardBody>
                                    </Card>
                                </Box>
                                </>
                            ))}
                        </HStack>
                    </CardBody>
                </Card>
             </HStack>
        </VStack>
        </>
    )
}

export default Menuitems