interface TestProps{
    outputtext?: string
    outputNumber?: number
}

export function Outputtest({outputtext, outputNumber}: TestProps){
    return (
        <p>O retorno foi o texto {outputtext} e o numero {outputNumber}</p>
    )
}