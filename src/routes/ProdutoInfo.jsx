import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"
import { Box, Flex, Text, Heading, Image, Center, Button } from "@chakra-ui/react"
import Navbar from "../components/Navbar"

export default function ProdutoInfo(){

    const params = useParams()
    console.log(params.id)

    const [produto, setProduto] = useState([])
  
    async function getProduto() {
      let {data: produtos, error} = await supabase
      .from('produtos')
      .select('*')
      .eq('id', `${params.id}`)
      setProduto(produtos)
    }
  
    useEffect(()=> {
      getProduto();
    }, [])

    return(
        <div>
            <Navbar />
            {produto != '' ? 
                        <Center mt='32'>
                            <Box>
                            <Flex alignItems='center' justifyContent='space-between' gap='20'>
                                <Image src={produto[0].img} boxSize='md'/>
                                <Box w='lg'>
                                    <Text>{produto[0].marca}</Text>
                                    <Heading fontWeight='normal'>{produto[0].nome}</Heading>
                                    <Text fontSize='4xl' fontWeight='bold' mt='10'>R${produto[0].preco}</Text>
                                    <Button mt='2' fontSize='3xl' py='10' px='10' w='smaller'>Comprar</Button>
                                </Box>
                            </Flex>
                        </Box>
                    </Center>
                    : ''    
        }

        </div>
    )
}