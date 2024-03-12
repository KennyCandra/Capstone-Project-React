import greekSalad from "../assets/photos/greek salad.jpg"
import lemonDessert from "../assets/photos/lemon dessert.jpg"
import bruchetta from "../assets/photos/bruchetta.svg"
import MenuCard from "./MenuCard"
import { Grid, Heading, VStack } from "@chakra-ui/react"

const menu = [
    {
        img: greekSalad,
        heading: 'Greek Salad',
        price: '12.99$',
        description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        delivery: 'Order a Delivery',
    },
    {
        img: lemonDessert,
        heading: 'Lemon Dessert',
        price: '5.99$',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        delivery: 'Order a Delivery',
    },
    {
        img: bruchetta,
        heading: 'Bruchetta',
        price: '5.00$',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        delivery: 'Order a Delivery',
    }
];
function Menuitems () {
    return  (
        <>
        <VStack>
        <Heading as={'h1'} colorScheme="black"
        justifyContent={'center'}>Menu</Heading>
        <Grid 
        // padding={'20px'}
        >
        {menu.map((items) => (
            <MenuCard
            title={items.heading}
            img = {items.img}
            price = {items.price}
            description ={items.description}
            />
            ))}
        </Grid>
        </VStack>
        </>
    )
}

export default Menuitems