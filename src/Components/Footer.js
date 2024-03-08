import { Stack, Heading, Image, List, ListItem, VStack } from "@chakra-ui/react";
import Logo from "../assets/photos/Logo .svg"
import { Link } from "react-router-dom";


function Footer () {
    return (
        <Stack flexDir={['column' , 'row' ,'row' ,'row']}
            backgroundColor={'#DEDEDE'}
            p={'50px'}
            justifyContent={'center'}
            >
            <Image src={Logo} />
            <VStack alignItems={'flex-start'} pl={'50px'}>
                <Heading size={'h3'}>Contact</Heading>
                <List>
                    <ListItem><a href="#">Adress</a></ListItem>
                    <ListItem><a href="#">Phone Number</a></ListItem>
                    <ListItem><a href="#">Email</a></ListItem>
                </List>
            </VStack>

            <VStack pl={'50px'}>
                <Heading size={'h3'}>Social Media Links</Heading>
                <List>
                    <ListItem><a href="facebook.com">Facebook</a></ListItem>
                    <ListItem><a href="x.com">Twitter</a></ListItem>
                    <ListItem><a href="instagram.com ">Instagram</a> </ListItem>
                </List>
            </VStack>
        </Stack>
    )
}

export default Footer;