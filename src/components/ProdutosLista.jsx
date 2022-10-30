import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"
import ProdutoCard from "./ProdutoCard"
import { grid, Grid, GridItem} from "@chakra-ui/react"


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
      <Grid templateColumns='repeat(3, 1fr)' gap='10' p='10'>
        {produto != [] ? produto.map((produto) =>
            <GridItem w='100%' h='100%'>
                <ProdutoCard categoria={produto.categoria} nome ={produto.nome} img={produto.img} preco={produto.preco} nota={produto.nota} qntd={produto.nota_qntd} marca={produto.marca}/>
            </GridItem>
        ) : console.log('Vazio')}
      </Grid>
    )
}