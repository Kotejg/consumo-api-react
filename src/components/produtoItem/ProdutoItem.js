import React from 'react'
import { Link } from 'react-router-dom'

function ProdutosItem(props) {
    
    const produto = props.products || {}

    return(
        <>
        <h1>{produto.nome} </h1> 
        <small>{produto.statusProduto}</small>
        <div> 
            <div><img width="450" src={produto.url}/> </div> 
            <div>R$ {produto.preco} </div>
            <div>categoria: {produto.categoria} </div>
            <div>armazenamento: {produto.armazenamento} </div>
            <div>descricao: {produto.descricao} </div>
            <Link to="/">Voltar para home</Link>
        </div>
        </>
    )

} 

export default ProdutosItem