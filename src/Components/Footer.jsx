import { Stack, Heading, Image, List, ListItem, VStack } from "@chakra-ui/react";
import Logo from "../assets/photos/Logo .svg"


function Footer () {
    return (
        <Stack flexDir={['column' , 'row' ,'row' ,'row']}
            backgroundColor={'#DEDEDE'}
            p={'50px'}
            justifyContent={'center'}
            bottom={'0'}
            as='footer'
            mt={'auto'}
            mb={'0'}
            >
            <Image src={Logo} />
            <VStack alignItems={'flex-start'} pl={'50px'}>
                <Heading size={'h3'}>Contact</Heading>
                <List>
                    <ListItem><a href="adress">Adress</a></ListItem>
                    <ListItem><a href="phone">Phone Number</a></ListItem>
                    <ListItem><a href="Email">Email</a></ListItem>
                </List>
            </VStack>

            <VStack pl={'50px'}>
                <Heading size={'h3'}>Social Media Links</Heading>
                <List>
                    <ListItem><a href="https://www.facebook.com/ahmed.abderhman.14" target="_blank" rel="noreferrer">Facebook</a></ListItem>
                    <ListItem><a href="x.com">Twitter</a></ListItem>
                    <ListItem><a href="instagram.com ">Instagram</a> </ListItem>
                </List>
            </VStack>
        </Stack>
    )
}

export default Footer;