import { Box, Button,Text, VStack } from "@chakra-ui/react"
import { FaXmark } from "react-icons/fa6"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const Submission = ({display , setDisplay}) => {
    const handleClick = () => {
        setDisplay(false)
    }

    return (
        <Box className="submission">
            <Box className="overlay">
                <Box className="submission-box" w={'50%'} h={'40%'} position={'relative'}>
                    <VStack>
                        <Button position={'absolute'} top={'2%'} right={'2%'} onClick={handleClick} p={'0'}><FaXmark /></Button>
                        <IoMdCheckmarkCircleOutline  color="green" size={'200px'} p={'0'} />
                        <Text fontSize={'3rem'} fontWeight={'bold'} p={'0'}>Thank You!</Text>
                        <Text fontSize={'1rem'} p={'0'}>Your reservation has been submitted </Text>
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
} 

export default Submission