import ListaProdutos from "../../components/listaProdutos/ListaProdutos"
import Axios from "axios"
import { useEffect, useState } from "react"
import axios from "axios"
import {baseApi} from '../../envaronments'


function Home(props) {

    const [produtos, setProdutos] = useState([])
    //alterar estado 

    // useEffect(() => {
    //     getProdutos()
    // }, []) 
    //quando o component for redentizado, ele executa.

    // const getProdutos = () => {
    //     Axios.get('http://localhost:3001/produtos').then((response) => {
    //         setProdutos(response.data)

    //     }).catch((e) => {
    //         console.log(e);
    //     })
    // } 
    useEffect(() => {
        axios.get(`${baseApi}produtos`)
        .then((response) => {
           setProdutos(response.data)
        }).catch((e) => {
            console.log(e.message);
        })
    },[])

    return (
        <>
           <ListaProdutos title="Produtos" produtos={produtos} />
        </>
    )
}

export default Home