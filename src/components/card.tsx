import { ReactNode } from "react";

interface propsCard{
    children: ReactNode
}

export function Card({children}:propsCard){
    return (<div className="card">{children}</div>)
}