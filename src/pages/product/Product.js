import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseApi } from '../../environments'
import ProdutosItem from '../../components/produtoItem/ProdutoItem' 
 
function Product(props) {

    const { id } = useParams()

    const [produto, setProduto] = useState({})

    useEffect(()=>{
        axios.get(`${baseApi}/produtos/${id}`)
        .then((response) => {
            setProduto(response.data)
        })
        .catch((error) => {
            console.error(error)
        })  
    }, [])

    return(
        <>
        <ProdutosItem products={produto}/>
        </>
    )
}

export default Product