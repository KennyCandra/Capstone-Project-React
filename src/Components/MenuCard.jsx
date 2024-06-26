import { Button, Card, CardBody, HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"

const MenuCard = ({title , img , price , description}) => {
    return  (
        <>
        <Card className="Menu"
        direction={{base : 'column', sm : 'row'}}
        variant={'outline'}
        gap={'20px'}
        border={'solid black 2px'}
        >
        <VStack>
            <HStack>
                <Image
                objectFit={'fill'}
                maxW={{base: '100%' , sm : '200px'}}
                src={img}
                alt={title}
                w={'auto'}
                h={'auto'}
                ml={'10px'}
                />

                <Stack>
                    <CardBody>
                        <Heading size={'sm'}>{title}</Heading>
                        <Text py='2'>{description}</Text>
                        <Text fontWeight={'bold'}>{price}</Text>
                    </CardBody>
                </Stack>
            </HStack>
            <Button variant={'solid'}
                colorScheme={"yellow"}
                w={"100%"}
                borderRadius={'0'}>
                    Add to Cart
            </Button>
        </VStack>

        </Card>
</>
    )
}
export default MenuCard