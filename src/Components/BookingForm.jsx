import { Box, Button, Grid, GridItem, Heading } from "@chakra-ui/react"
import DropDownMenu  from "./DropDownMenu"
import PhotosComponent from "./PhotosComponent"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { reservationFormContext } from "./context/ReservationFormContext"
import './BookingForm.css'

function BookingForm () {
    const occasion = ['birthday' , 'anniversary' , 'meal']
    const numberOfPeople = ['1' , '2' , '3','4','5','6','7','8','9','10']
    const time = ['5pm','6pm','7pm','8pm','9pm','10pm','11pm']
    const reservationPlace = ['In door' , 'Out door' , 'Delivery']
    const navigate = useNavigate()
    const {selected , setSelected} = useContext(reservationFormContext)


const gridItems = [
    {
        area: 'occasion',
        heading: 'occasion',
        options: occasion,
        objKey: 'occasion'
    },
    {
        area: 'time',
        heading: 'Time',
        options: time,
        objKey: 'time'
    },
    {
        area: 'people',
        heading: 'Number of People',
        options: numberOfPeople,
        objKey: 'numberOfPeople'
    },
    {
        area: 'radio',
        heading: 'Reservation Place',
        options: reservationPlace,
        objKey: 'reservationPlace'
    }
];

    return <>
            <Box className="booking-container"
             h={'50vh'}
             w={'100vw'}
             background={'#495E57'}
            >
                <Grid templateAreas={`
                    "header header"
                    "occasion time"
                    "people radio"`}
                w={'50%'}
                userSelect={'none'}
                gap={'10px'}
                m={'auto'}
                alignItems={'flex-end'}
                justifyContent={'center'}>
                    <GridItem area={'header'}>
                        <Heading color={'white'} m={'auto'} mb={'5%'} w={'90%'} p={'absolute'} left={0} top={0}>Your Reservation Information</Heading>
                    </GridItem>

                    {gridItems.map(grid => (
                        <GridItem area={grid.area} p={'10px'}>
                            <Box p={'relative'}>
                                <Heading as={'h6'} fontSize={'20px'} mb={'5%'}>{grid.heading}</Heading>
                                <DropDownMenu options={grid.options} selected={selected} setSelected={setSelected} objKey={grid.objKey}/>
                            </Box>
                        </GridItem>
                    ))}

    </Grid>
    </Box>

    <PhotosComponent />

    <Button onClick={() => {navigate('/reservation')}} w={'10%'} m={'auto'} mb={'10px'} className='BTN' background={'#F4CE14'}  _hover={{ bg: '#EE9972' }}>Reserve</Button>



    </>
}

export default BookingForm