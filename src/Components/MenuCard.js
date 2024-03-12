import { Button, Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react"

const MenuCard = ({title , img , price , description}) => {
    return  (
        <>
        <Card
        direction={{base : 'column', sm : 'row'}}
        overflow={'hidden'}
        variant={'outline'}
        cursor={'pointer'}>
            <Image
            objectFit={'cover'}
            maxW={{base: '100%' , sm : '200px'}}
            src={img}
            alt={title}
            />

            <Stack>
                <CardBody>
                    <Heading size={'sm'}>{title}</Heading>

                    <Text py='2'>{description}</Text>
                    <Text fontWeight={'bold'}>{price}</Text>
                </CardBody>
                <Button variant={'solid'} colorScheme="yellow">Add to Cart</Button>
            </Stack>

        </Card>
</>
    )
}
export default MenuCard