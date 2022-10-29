import { Box, Image, Text, Heading, Flex } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export default function ProdutoCard(props){
    return(
        <Box maxW='sm' borderRadius='lg'>
            <Image src={props.img} /> 
            <Text fontSize='smaller'>{props.categoria}</Text>
            <Heading as='h2' size='lg'>{props.nome}</Heading>
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