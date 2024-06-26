import {Heading, VStack, HStack, Text, Box, Card, CardBody, Image, Button, Grid, GridItem, useMediaQuery} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import data from "../assets/data/data.json"
import { ContextApp } from "./context/Context"
import { FaCheck ,FaXmark  } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import './menuitems.css'
let menu = Object.getOwnPropertyNames(data)


function Menuitems () {

    const [selected , setSelected] = useState('0')
    const[selectedDish , setSelectedDish] =  useState('pizza')
    const {addToCart} = useContext(ContextApp)
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const navigate = useNavigate()

    const handleClick1 = () => {
        navigate('/checkout')
    }


    const handleClick = (item , key) => {
    setSelectedDish(item)
    setSelected(key)
}
useEffect(() => {
    data[selectedDish].forEach((item) => {
        item.id = item.id + item.name[0] + item.name[1]
    });
},[selectedDish])

    return  (
        <>
        <VStack userSelect={'none'}>
            <Heading
                className="h1"
                color={'black'}
                colorScheme="black"
                justifyContent={'center'}
                mb={'2%'}>
                    Menu
            </Heading>
            <HStack gap={'2rem'} className="menu-titles">
                {menu.map((item , key) => (
                    <Box borderRadius={'50px'}
                        border={'2px solid grey'}
                        key={key}
                        padding={'0.5rem'}
                        cursor={'pointer'}
                        className={selected === key ? 'item-container active' : ''}
                        onClick={() => handleClick(item , key)}
                        mb={'5%'}>
                    <Text fontWeight={'bold'} textTransform={"capitalize"} key={key}>{item}</Text>
                    </Box>
                ))}
            </HStack>
             <VStack>
                <Grid templateColumns={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)','repeat(5, 1fr)']} gap={6}>
                    {data[selectedDish].map((dish) => (
                        <GridItem w={'20%'} h={'50%'} mb='5%'>
                            <Card
                            border={'2px solid black'}
                            h={'350px'}
                            w={'200px'}
                            position={'relative'}
                            overflow={'hidden'}
                            >
                                <Image
                                    src={dish.image}
                                    width={'90%'}
                                    height={'50%'}
                                    m={'auto'}
                                />
                            <CardBody position={'relative'}
                            p={0}>
                                    <Text
                                        as='h2'
                                        fontWeight={'bold'}
                                        mt={'10px'}
                                        pl={'2%'}>
                                            {dish.name}
                                    </Text>
                                        <Text as={'h1'}
                                            fontWeight={'bold'}
                                            mt={'5px'}
                                            mb={'5px'}
                                            pl={'2%'}>
                                            {dish.price}$
                                        </Text>
                                         <HStack pl={'2%'}>
                                           <Text display={'inline'} fontWeight={'bold'}>Vegeterian:</Text> {dish.vegetarian ? <FaCheck color={'green'} /> : <FaXmark color={'red'} />}
                                           <Text display={'inline'} fontWeight={'bold'}>Spicy:</Text>  {dish.spicy ? <FaCheck color={'green'} /> : <FaXmark color={'red'} />}
                                         </HStack>
                                        <Button className='BTN' background={'#F4CE14'}  _hover={{ bg: '#EE9972' }}
                                            onClick={()=> addToCart(dish)}
                                            position={'absolute'}
                                            bottom={0}
                                            w={'100%'}>
                                            Add To Cart
                                        </Button>
                            </CardBody>
                                    </Card>
                                </GridItem>
                            ))}
                </Grid>
             </VStack>
                    <Button m={'5%'} onClick={handleClick1} className='BTN' background={'#F4CE14'}  _hover={{ bg: '#EE9972' }}>Check Out</Button>
        </VStack>
        </>
    )
}

export default Menuitems
