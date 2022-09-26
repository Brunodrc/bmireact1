import { ChangeEventHandler } from 'react';

interface calcBMIProps{
    height: number
    weight: number
    // onChangeCallback: ChangeEventHandler
}

export function CalcBMI({height, weight}:calcBMIProps){

    const bmi = ()=>{
        const result = weight/(height * height)
        return alert(`Your BMI is ${result.toFixed(2)}`)
    }
    return (
        <button onClick={bmi}>Calcular</button>
    )
}