import { ChangeEventHandler } from "react"

interface propsName{
    name: string
    onChangeCallback: ChangeEventHandler
}

export function InputName({name, onChangeCallback}:propsName){
    return(
        <>
        <input type='text'
        value={name}
        onChange={onChangeCallback}
        />
        </>
    )
}