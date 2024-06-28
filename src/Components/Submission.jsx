import { Box, Button, Text } from "@chakra-ui/react"
import { FaBan } from "react-icons/fa6"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const Submission = ({display , setDisplay}) => {
    const handleClick = () => {
        setDisplay(false)
    }

    return (
        <Box className="submission">
            <Box className="overlay">
                <Box className="submission-box" w={'300px' } h={'300px'} position={'relative'}>
                    <Button position={'absolute'} top={'2%'} right={'2%'} onClick={handleClick}><FaBan /></Button>
                    <IoMdCheckmarkCircleOutline  color="green" size={'200px'} />
                    <Text fontSize={'3rem'} fontWeight={'bold'}>Thank You!</Text>
                    <Text fontSize={'1rem'}>Your reservation has been submitted </Text>
                </Box>
            </Box>
        </Box>
    )
} 

export default Submission