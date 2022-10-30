import { Box, Image, Text, Heading, Flex, Center } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export default function ProdutoCard(props){
    return(
        <Box maxW='md' minH='lg' maxH='lg' borderWidth='2px' p='4' position='relative'>
            <Center><Image src={props.img} boxSize='275px' mb='2' /></Center>
            <Text fontSize='smaller'>{props.categoria} • {props.marca}</Text>
            <Heading as='h2' size='md'>{props.nome}</Heading>
            <Box position='absolute' bottom='10'>
                <Text>
                    <Flex alignItems='center' gap='1'>
                    <StarIcon />{props.nota} ({props.qntd})
                    </Flex>
                </Text>
                <Text  fontSize='2xl' fontWeight='600'>R${props.preco}</Text>
            </Box>
        </Box>
    )
}