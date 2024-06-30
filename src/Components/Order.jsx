import { useContext, useEffect, useState } from "react"
import { ContextApp } from "./context/Context"
import { Box, Button, Center, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Order = () => {

    const {cartItem , increment , decrement , removeItem } = useContext(ContextApp)
    const [empty , setEmpty] = useState(false)

    useEffect(()=> {
        document.body.classList.remove('active-added')
    }
)

    const navigation = useNavigate()

    const handleClick = () => {
        navigation('../bookingpage')
    }

    const handleClick2 = () => {
        navigation('../menu')
    }

    useEffect(()=> {
        if(cartItem.length !== 0){
            setEmpty(true)
        }
        
    },[cartItem])

    const [totalAmount , setTotalAmount] = useState(0)
    const [count , setCount] = useState(0)

        useEffect(()=> {
            let total = 0
            cartItem.forEach(item => total += Number(item.price * item.count))
            setTotalAmount(total)
            console.log(cartItem)
        },[cartItem])

        useEffect(()=> {
            let count = 0
            cartItem.forEach(item => count += Number(item.count))
            setCount(count)
            console.log(cartItem)
        },[cartItem])


    return (
        <Box >
            <Center>
                <Heading fontWeight='bold' mb='1%'>Your Order</Heading>
            </Center>
        {cartItem.map(item => (
            <Box border='1px solid grey' m='auto' w='30%' mb='10px' borderRadius='25px'>
               <Image src={item.image} m='auto' w='50%' h='20%' />
                 <Text m='auto'  w='40%' h='20%' fontWeight='bold' textAlign={'center'}>{item.name}</Text>
               <Center>
                <VStack>
                    <HStack>
                        <Button w='50%' onClick={() => increment(item.id)} color='black'>+</Button>
                        <Button w='50%' onClick={() => decrement(item.id)} color='black'>-</Button>
                    </HStack>
                        <Button w='100%' onClick={() => removeItem(item.id)} color='black'><Text fontSize='1em'>Remove</Text></Button>
                </VStack>
               </Center>
               <Center>
                    <Text fontWeight='bold' mr='10%' mt='3%'>Qty :{item.count}</Text>
                    <Text fontWeight='bold' mt='3%'>{item.price}$</Text>
               </Center>
            </Box>
        ))}
            <Center m='1%'>
                <VStack>
                        <Text fontWeight='bold' display='block'>Subtotal({count}items): {totalAmount}$</Text>
                <HStack>
                    <Button onClick={handleClick2} color='black'  className='BTN' background={'#F4CE14'}  _hover={{ bg: '#EE9972' }}>Continou Shopping</Button>
                    {!empty &&<Button onClick={handleClick} color='black'  className='BTN' background={'#F4CE14'}  _hover={{ bg: '#EE9972' }}>Proceed Ordering</Button>}
                </HStack>
                </VStack>
            </Center>

        </Box>
    )
}

export default Order

