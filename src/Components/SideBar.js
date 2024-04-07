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
    CardFooter } from "@chakra-ui/react"
import { useContext, useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ContextApp } from "./context/Context";

const SideBar = () => {

const {isOpen , onOpen , onClose} = useDisclosure();
const btnRef = useRef()
const {cartItem ,clearCart, increment , decrement , removeItem} = useContext(ContextApp)


    return (
        <div >
            <Button style={{position : 'absolute' , right : '30px', top : '20px'}} ref={btnRef} onClick={onOpen}>
                <AiOutlineShoppingCart style={{width : '20px' , height : '20px' , color : '#495E57'}}/>
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
                        {cartItem.map((dish) => (
                            <Card key={dish.id}>
                                <CardHeader>
                                    <Image src={dish.image} />
                                </CardHeader>
                                <CardBody>
                                    <HStack justifyContent={'space-around'}>
                                        <Text as='h6'>
                                            {dish.name}
                                        </Text>
                                        <Text as='h6' fontWeight={'bold'}>
                                            {dish.price * dish.count}$
                                        </Text>
                                    </HStack>
                                    <CardFooter>
                                        <div>{dish.count}</div>
                                        <Button onClick={() => increment(dish.id)}>+</Button>
                                        <Button onClick={() => decrement(dish.id)}>-</Button>
                                        <Button onClick={() => removeItem(dish.id)} background={'red'} color={'white'}>remove</Button>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        ))}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant={'outline'} onClick={onClose} m={'10px'} >
                            close
                        </Button>
                        <Button color={"blue"} m={'10px'} > Save</Button>
                        <Button color={'black'} variant={'outline'} m={'10px'} onClick={() => clearCart()}>Clear Cart</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default SideBar