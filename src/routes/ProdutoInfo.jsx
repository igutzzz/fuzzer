import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react"
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
                        <Box>
                        <Flex alignItems='center'>
                            <Image src={produto[0].img} boxSize='md'/>
                            <Box>
                                <Heading>{produto[0].nome}</Heading>
                            </Box>
                        </Flex>
                    </Box> 
                    : ''    
        }

        </div>
    )
}