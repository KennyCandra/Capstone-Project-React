import { Card, CardBody, CardFooter, CardHeader, Grid, HStack, Heading, Image,Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Testiominals () {
    const [user , setUser] = useState([])

    const fetchData = () => {
        fetch('https://randomuser.me/api/?results=1')
        .then((response) => response.json())
        .then((data) => setUser(data.results))
    }

    useEffect(() => {
        fetchData()
    },[])

    const card = () =>  { return Object.keys(user).length > 0 ? (
            <Card p={0} alignItems={'center'}
            justifyContent={'flex-end'}
            w={'200px'}
            h={'175px'}>
                    <CardHeader >
                        <Heading size={'h6'}>Rating</Heading>
                    </CardHeader>
                    <CardBody pt={0}>
                        <HStack justifyContent={'flex-start'}>
                            <Image src={user[0].picture.large} w={'20%'} />
                            <Heading size={'h6'} w={'50%'}>{user[0].name.first}</Heading>
                        </HStack>
                        <CardFooter p={0} pt={'10px'}>
                            <Text fontStyle={'bold'}>
                                Delicious Food i love it
                            </Text>
                        </CardFooter>
                    </CardBody>
            </Card>
    ) : (<div>
        fetching data
    </div>)}

    const cardComponents = Array.from({ length: 4 }, (_, index) => (
        <div key={index}>
            {card()}
        </div>
    ));
    return (
        <VStack backgroundColor={'#D9D9D9'} p={'20px'}>
            <Heading as={'h1'}>Testiominals</Heading>
            <Grid
                templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)']}
                gap={'20px'}
                >
                    {cardComponents}
            </Grid>
        </VStack>
    )
}

export default Testiominals