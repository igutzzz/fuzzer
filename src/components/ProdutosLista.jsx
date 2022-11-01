import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"
import ProdutoCard from "./ProdutoCard"
import { SimpleGrid, Box } from "@chakra-ui/react"
import { Link } from 'react-router-dom'


export default function ProdutosLista() {

    const [produto, setProduto] = useState([])
  
    async function getProdutos() {
      let {data: produtos, error} = await supabase
      .from('produtos')
      .select('*')
      setProduto(produtos)
      console.log(produtos)
    }
  
    useEffect(()=> {
      getProdutos();
    }, [])
  
    return(
      <SimpleGrid minChildWidth='lg' spacing='10' p='10' ml='10'>
        {produto != [] ? produto.map((produto) =>
            <Box w='100%' h='100%'>
              <Link to={`produto/${produto.id}`}>
                <ProdutoCard categoria={produto.categoria} nome ={produto.nome} img={produto.img} preco={produto.preco} nota={produto.nota} qntd={produto.nota_qntd} marca={produto.marca}/>
              </Link>
            </Box>
        ) : console.log('Vazio')}
      </SimpleGrid>
    )
}