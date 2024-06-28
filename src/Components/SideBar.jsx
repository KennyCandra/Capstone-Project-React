import { Button, 
    DrawerBody,
    DrawerCloseButton,
    DrawerContent, 
    DrawerFooter, 
    DrawerHeader, 
    DrawerOverlay, 
    useDisclosure,
    Drawer,
    Card, 
    CardHeader,
    Image,
    CardBody,
    Text,
    HStack,
    VStack,
    CardFooter, 
    useMediaQuery,
    Box} from "@chakra-ui/react"
import { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ContextApp } from "./context/Context";
import { useNavigate } from "react-router-dom";

const SideBar = () => {

const navigate = useNavigate()
const {isOpen , onOpen , onClose} = useDisclosure();
const btnRef = useRef()
const {cartItem ,clearCart, increment , decrement , removeItem } = useContext(ContextApp)
const [totalAmount , setTotalAmount] = useState(0)

useEffect(()=> {
    let total = 0

    cartItem.forEach((item) => {
        total += Number(item.price * item.count)
    })
    setTotalAmount(total)
},[cartItem])

const handleClick = () => {
    navigate('/checkout')
    onClose()
}

const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

const [position, setPosition] = useState('20px')

useEffect(() => {
    if (isLargerThan768) {
        setPosition('70px')
    } else {
        setPosition('20px')
    }
}, [isLargerThan768])


    return (
        <div >
            <Button position={'absolute'} right={['10px' , '10px' , '10px' , '10px']} top={['70px' , '70px' , '20px' , '20px']} ref={btnRef} onClick={onOpen}>
                <AiOutlineShoppingCart style={{width : '20px' , height : '20px' , color : '#495E57'}} />
                <Text marginLeft={'10px'} fontSize={'0.8rem'} top={'1'} left='6' >{cartItem.length}</Text>
            </Button>
            <Drawer
            isOpen={isOpen}
            placement ={"right"}
            onClose={onClose}
            finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your Items</DrawerHeader>
                    <DrawerBody>
                        {cartItem.map(item => (
                            <Box mb='10px' key={item.id}>
                                <Card>
                                    <CardHeader>
                                        <HStack>
                                            <Image src={item.image} w='50%' h='20%'/>
                                            <VStack alignItems={'stretch'}>
                                                <Text fontWeight='bold'>{item.name}</Text>
                                                <Text fontWeight='bold'>Qty : {item.count}</Text>
                                            </VStack>
                                        </HStack>
                                    </CardHeader>
                                    <CardBody>
                                        <HStack mb='3%'>
                                            <Button w={'50%'} onClick={() => increment(item.id)} className='BTN' background={'#F4CE14'}  _hover={{ bg: '#EE9972' }} color='black'>+</Button>
                                            <Button w={'50%'} onClick={() => decrement(item.id)} className='BTN' background={'#F4CE14'}  _hover={{ bg: '#EE9972' }} color='black'>-</Button>
                                        </HStack>
                                        <Button w='100%' onClick={() => removeItem(item.id)} background={'red'} color='black'><Text fontSize='1em'>Remove</Text></Button>
                                    </CardBody>
                                </Card>
                            </Box>
                        ))}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button m={'10px'} onClick={handleClick} className='BTN' background={'#F4CE14'}  _hover={{ bg: '#EE9972' }} > Check Out</Button>
                        <Button color={'black'} variant={'outline'} m={'10px'}  _hover={{ bg: '#495E57' }} onClick={() => clearCart()}>Clear Cart</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default SideBar
