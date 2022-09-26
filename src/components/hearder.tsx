interface Propsheader{
    conteudo:string
}

export function Header({conteudo}:Propsheader){
    return <header> <h1>{conteudo}</h1></header>
}