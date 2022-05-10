import { Link } from "react-router-dom"

function ListaProdutos(props) {
    const produtos = props.produtos || []

    return (
        <>
            <h1>{props.title}</h1>
            {
                produtos.map(item => {
                    return (
                        <h3 key={item.id}>
                            {item.nome} - R$ {item.preco} <br />
                            <Link to={'/produtos/'+item.id}>Ir para produto</Link>
                        </h3>
                    )
                })
            }

        </>
    )
}

export default ListaProdutos