import restaurantphoto from '../assets/photos/restaurant chef B.jpg'
import restaurantphoto1 from '../assets/photos/restauranfood.jpg'
import restaurantphoto2 from '../assets/photos/restaurant.jpg'
import { HStack, Image } from '@chakra-ui/react'

const PhotosComponent = () => {
    return (<>
        <HStack w={'70vw'} h={'40vh'} m={'auto'} justifyContent={'space-evenly'}>
            <Image src={restaurantphoto} w={'20%'} h={'60%'} m={'auto'} borderRadius={'20px'}></Image>
            <Image src={restaurantphoto1} w={'20%'} h={'60%'} m={'auto'} borderRadius={'20px'}></Image>
            <Image src={restaurantphoto2} w={'20%'} h={'60%'} m={'auto'} borderRadius={'20px'}></Image>
        </HStack>
    </>)
}

export default PhotosComponent
