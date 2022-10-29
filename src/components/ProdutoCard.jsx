import { Box, Image, Text, Heading, Flex } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export default function ProdutoCard(props){
    return(
        <Box maxW='md' minH='md' maxH='md' borderWidth='1px' p='4' position='relative'>
            <Image src={props.img} boxSize='275px'  /> 
            <Text fontSize='smaller'>{props.categoria}</Text>
            <Heading as='h2' size='md'>{props.nome}</Heading>
            <Flex alignItems='center' justifyContent='space-between'>
                <Text>R${props.preco}</Text>
                <Text>
                    <Flex alignItems='center' gap='1'>
                    <StarIcon />{props.nota} ({props.qntd})
                    </Flex>
                </Text>
            </Flex>
        </Box>
    )
}