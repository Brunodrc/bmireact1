import { ChangeEventHandler } from "react";

interface InputNumProps{
    num: number
    onChangeCallback: ChangeEventHandler
}

export function InputNumber ({num, onChangeCallback}: InputNumProps){
    return (
        <>
        <input type='number'
        value={num}
        onChange={onChangeCallback}
        />
        </>
    )
}