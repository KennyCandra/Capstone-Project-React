import { Box, Button,HStack,Image,Text, VStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import './AddedItem.css'

const AddedItem = ({display , setDisplay , newDish , setNewDish}) => {
    const handleClick = () => {
        setDisplay(false)
        setNewDish([])
    }   

    const navigation = useNavigate()
    return (
        <Box className="added">
            <Box className="overlay-added">
                <Box className="submission-added" w={'auto'} h={'auto'} position={'relative'} borderRadius={'0'}>
                    <HStack>
                        <Image src={newDish.image} mr={'5%'} w={'50%'} h={'50%'} />
                        <VStack>
                            <Text fontWeight={'bold'}>{newDish.name}</Text>
                            <Text>Added to your Cart Succesfully</Text>
                            <HStack>
                                <Button onClick={handleClick} className='BTN' background={'#F4CE14'}  _hover={{ bg: '#EE9972' }}>Continou Shopping</Button>
                                <Button onClick={() => navigation('/checkout')} className='BTN' background={'#F4CE14'}  _hover={{ bg: '#EE9972' }}>Check Out</Button>
                            </HStack>
                        </VStack>
                    </HStack>
                </Box>
            </Box>
        </Box>
    )
} 

export default AddedItem