import { useState, useEffect } from "react"
import { supabase } from "./supabaseClient"
import ProdutoCard from "./components/ProdutoCard"

export default function App() {

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
    <div>
      {produto != [] ? produto.map(
        (produto) => <ProdutoCard categoria={produto.categoria} nome ={produto.nome} img={produto.img} preco={produto.preco} nota={produto.nota} qntd={produto.nota_qntd}/>
      ) : console.log('Vazio')}
    </div>
  )
}