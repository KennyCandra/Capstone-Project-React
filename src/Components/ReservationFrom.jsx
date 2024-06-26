import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Center, Grid, GridItem, HStack, Text, Textarea} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { reservationFormContext } from "./context/ReservationFormContext"
import PhotosComponent from "./PhotosComponent";
import FormInput from "./FormInput";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { FaClock } from "react-icons/fa6";
import { IoPeople  } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { SiAirtable } from "react-icons/si";
import './FormInput.css'


const ReservationFrom = () => {
    const {selected } = useContext(reservationFormContext)
    const [occasionIconColor , setOccasionIconColor] = useState('red')
    const [timeIconColor , setTimeIconColor] = useState('red')
    const [peopleIconColor, setPeopleIconColor] = useState('red')
    const [reservationIconColor , setReservationIconColor] = useState('red')

    const updateIcon = (condition , setIconState , validColor , inValidColor) => {
        if(condition){
            setIconState(validColor)
        } else {
            setIconState(inValidColor)
        }
    }


    useEffect(() => {
        const isOccasionValid = selected.occasion !== "Choose Occasion"
        updateIcon(isOccasionValid , setOccasionIconColor , 'white' , 'red')


        const isTimeValid = selected.time !== "Choose Time"
        updateIcon(isTimeValid , setTimeIconColor , 'white' , 'red')

        const isPeopleValid = selected.numberOfPeople !== "Choose Number"
        updateIcon(isPeopleValid , setPeopleIconColor , 'white' , 'red')

        const isPlaceValid = selected.reservationPlace !== "Choose Place"
        updateIcon(isPlaceValid , setReservationIconColor , 'white' , 'red')

    },[selected])

    const initialState = {
        firstName : "",
        lastName: '',
        phoneNumber : '',
        Email: ''
    }

    const [values , setValues] = useState(initialState)
    const [comment, setComment] = useState('')
    const [showAlert , setShowAlert] = useState(false)

    const inputs = [
        {
            id : 1,
            name : 'firstName',
            type : 'text',
            placeHolder : 'First Name',
            ErrorMessage: 'Name should be 3 to 16 characters ',
            label : 'First Name',
            required:true,
            pattern:"^[a-zA-Z0-9]{3,16}$"
        },
        {
            id : 2,
            name : 'lastName',
            type : 'text',
            placeHolder : 'Last Name',
            ErrorMessage: 'Name should be 3 to 16 characters',
            label : 'Last Name',
            required:true,
            pattern:"^[a-zA-Z0-9]{3,16}$"


        },
        {
            id : 3,
            name : 'phoneNumber',
            type : 'number',
            placeHolder : 'Phone Number',
            ErrorMessage: 'Phone Number should be 11 Numbers',
            label : 'Phone Number',
            required:true,
            pattern:'^[0-9]{11}$'
        },
        {
            id : 4,
            name : 'Email',
            type : 'email',
            placeHolder : 'Your E-Mail',
            ErrorMessage: 'Please enter valid Email',
            label : 'Email',
            required : 'true',
        },
    ]

    const handleChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setComment('')
        setValues(initialState)
        console.log(selected)
        setShowAlert(true)
    }
    useEffect(() => {
        if(showAlert) {
            setTimeout(() => {
                setShowAlert(false)
            }, 3000)
        }
    },[showAlert])

    const handleCommentChange = (e) =>  {
        const inputValue = e.target.value
        setComment(inputValue)
        const wholeData = {...values,comment}
        setValues(wholeData)
        console.log(values)
    }


    return <>
    {console.log(reservationIconColor)}
    <Box className="booking-container"
    h={'60vh'}
    w={'100vw'}
    background={'#495E57'}
    m={'auto'}>
        <Center>
            <form onSubmit={handleSubmit}>
                {inputs.map((input)=>(
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={handleChange}/>
                ))}
            </form>
        </Center>
        <HStack>

            <Grid
                templateAreas={`"occasion people"
                                "time date"
                                "text text"`}
                w={'50%'}
                gap={'30px'}
                gridTemplateColumns={'25% 25%'}
                gridTemplateRows={'25% 25%'}
                justifyContent={'center'}
                >
                    <GridItem pl={'2'} area={'occasion'} display={'flex'} alignItems={'center'}>
                         <LiaGlassCheersSolid size={'50%'}  color={occasionIconColor}/>
                        {selected.occasion !== 'Choose Occasion' &&(<div className="selected">{selected.occasion}</div>)}
                    </GridItem>

                    <GridItem pl={'2'} area={'people'} display={'flex'} alignItems={'center'}>
                        <IoPeople size={'50%'} color={peopleIconColor}/>
                        {selected.numberOfPeople !== 'Choose Number' &&(<div className="selected">{selected.numberOfPeople} Diners</div>)}
                    </GridItem>

                    <GridItem pl={'2'} area={'time'}  display={'flex'} alignItems={'center'}>
                        <FaClock size={'50%'} color={timeIconColor}/>
                        {selected.time !== 'Choose Time' &&(<div className="selected">{selected.time}</div>)}
                    </GridItem>
                    <GridItem pl={'2'} area={'date'}  display={'flex'} alignItems={'center'}>
                        {selected.reservationPlace === 'Delivery' &&(<MdOutlineDeliveryDining size={'50%'} color={reservationIconColor}/>)}
                        {selected.reservationPlace === 'Choose Place' &&(<MdOutlineDeliveryDining size={'50%'} color={reservationIconColor}/>)}
                        {selected.reservationPlace === 'In door' || selected.reservationPlace === 'Out door' &&(<SiAirtable size={'50%'} color={reservationIconColor}/>)}
                        {selected.reservationPlace !== 'Choose Place' &&(<div className="selected">{selected.reservationPlace}</div>)}
                    </GridItem>
            </Grid>


                <Textarea
                    value={comment}
                    onChange={handleCommentChange}
                    placeHolder={'Write Your Comment'}
                    size={'sm'}
                    w={'24.5%'}
                    ml={'13%'}
                    h={'200px'}
                    bg={'white'}>
                </Textarea>
        </HStack>

        </Box>
            <PhotosComponent />
            <Button w={'20%'} m={'auto'} mb={'20px'} onClick={handleSubmit} className='BTN' background={'#F4CE14'}  _hover={{ bg: '#EE9972' }}>Confirm Reservation</Button>
            {showAlert && <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
                >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Application submitted!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    Thanks for submitting your application. Our team will get back to you soon.
                </AlertDescription>
                </Alert>}
    </>
}

export default ReservationFrom
